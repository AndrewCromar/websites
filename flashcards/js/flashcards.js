const storedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
const flashcards = storedFlashcards.map(card => ({
    ...card,
    score: 0 // Ensure all cards start with a score of 0
}));

let currentIndex = 0;
let isTransitioning = false;

const flashcard = document.querySelector('.flashcard');
const flipButton = document.querySelector('.flip');
const correctButton = document.querySelector('.correct');
const wrongButton = document.querySelector('.wrong');
const frontElement = document.querySelector('.front');
const backElement = document.querySelector('.back');

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

function transitionToNextCard(skipCurrent = false) {
    if (flashcards.length === 0) return;
    isTransitioning = true;
    flashcard.classList.remove('flipped');
    const nextIndex = getNextIndex(skipCurrent);
    updateFront(nextIndex);
    setTimeout(() => {
        currentIndex = nextIndex;
        updateBack(currentIndex);
        isTransitioning = false;
    }, 300);
}

function getNextIndex(skipCurrent = false) {
    let lowestScore = Math.min(...flashcards.map(card => card.score));
    let lowestIndex = flashcards.findIndex((card, index) =>
        card.score === lowestScore && (!skipCurrent || index !== currentIndex)
    );
    if (lowestIndex === -1 || (lowestIndex === currentIndex && skipCurrent)) {
        lowestIndex = (currentIndex + 1) % flashcards.length;
    }
    return lowestIndex;
}

updateFront(currentIndex);
updateBack(currentIndex);