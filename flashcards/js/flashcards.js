const storedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
const flashcards = storedFlashcards.map(card => ({
    ...card,
    score: card.score || 0,
    lastShown: card.lastShown || 0
}));

let currentIndex = 0;
let isTransitioning = false;

const flashcard = document.querySelector('.flashcard');
const flipButton = document.querySelector('.flip');
const correctButton = document.querySelector('.correct');
const wrongButton = document.querySelector('.wrong');
const frontElement = document.querySelector('.front');
const backElement = document.querySelector('.back');
const doneButton = document.querySelector('.done');

function updateFront(index) {
    if (flashcards.length === 0) {
        frontElement.textContent = "No cards available";
        return;
    }
    frontElement.textContent = flashcards[index].front;
}

function updateBack(index) {
    if (flashcards.length === 0) {
        backElement.textContent = "Add cards to get started!";
        return;
    }
    backElement.textContent = flashcards[index].back;
}

function hideButtons() {
    correctButton.classList.add('hidden');
    wrongButton.classList.add('hidden');
}

flipButton.addEventListener('click', () => {
    if (flashcards.length === 0 || isTransitioning) return;
    flashcard.classList.toggle('flipped');
    if (flashcard.classList.contains('flipped')) {
        correctButton.classList.remove('hidden');
        wrongButton.classList.remove('hidden');
    }
});

correctButton.addEventListener('click', () => {
    if (isTransitioning) return;
    flashcards[currentIndex].score += 1;
    hideButtons();
    transitionToNextCard();
});

wrongButton.addEventListener('click', () => {
    if (isTransitioning) return;
    hideButtons();
    transitionToNextCard(true);
});

doneButton.addEventListener('click', () => {
    sessionStorage.setItem('flashcardStats', JSON.stringify(flashcards));
    window.location.href = 'stats.html';
});

function transitionToNextCard(skipCurrent = false) {
    if (flashcards.length === 0) return;
    isTransitioning = true;
    flashcard.classList.remove('flipped');

    flashcards.forEach((card, index) => {
        if (index !== currentIndex) {
            card.lastShown += 1;
        } else {
            card.lastShown = 0;
        }
    });

    console.log("Updated lastShown values:", flashcards.map(card => card.lastShown));

    const nextIndex = getNextIndex(skipCurrent);
    updateFront(nextIndex);
    setTimeout(() => {
        currentIndex = nextIndex;
        console.log("Showing card:", flashcards[currentIndex]);
        updateBack(currentIndex);
        isTransitioning = false;
    }, 300);
}

function getNextIndex(skipCurrent = false) {
    if (flashcards.length === 0) return 0;

    const weights = flashcards.map((card, index) => {
        if (skipCurrent && index === currentIndex) return 0;

        const scoreWeight = Math.max(1, 10 - card.score);
        const lastShownWeight = Math.min(10, card.lastShown);
        return scoreWeight + lastShownWeight;
    });

    console.log("Weights:", weights);

    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const probabilities = weights.map(weight => weight / totalWeight);

    console.log("Probabilities:", probabilities);

    let random = Math.random();
    for (let i = 0; i < probabilities.length; i++) {
        random -= probabilities[i];
        if (random <= 0) {
            console.log("Selected index:", i);
            return i;
        }
    }

    console.log("Fallback to current index:", currentIndex);
    return currentIndex;
}

window.addEventListener('beforeunload', () => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
});

updateFront(currentIndex);
updateBack(currentIndex);