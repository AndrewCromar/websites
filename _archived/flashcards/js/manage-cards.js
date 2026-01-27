const cardList = document.getElementById('cardList');
const addCardButton = document.getElementById('addCardButton');
const saveCardsButton = document.getElementById('saveCardsButton');
const exportCardsButton = document.getElementById('exportCardsButton');
const importCardsInput = document.getElementById('importCardsInput');
const toast = document.getElementById('toast');

const storedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

function showToast(message) {
    toast.classList.remove('show');
    clearTimeout(toast.timeout);

    toast.textContent = message;
    toast.classList.add('show');

    toast.timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function createCardItem(front = '', back = '') {
    const cardItem = document.createElement('li');
    cardItem.className = 'card-item';

    const frontInput = document.createElement('input');
    frontInput.type = 'text';
    frontInput.placeholder = 'Front text';
    frontInput.value = front;

    const backInput = document.createElement('input');
    backInput.type = 'text';
    backInput.placeholder = 'Back text';
    backInput.value = back;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        cardList.removeChild(cardItem);
    });

    cardItem.appendChild(frontInput);
    cardItem.appendChild(backInput);
    cardItem.appendChild(removeButton);

    cardList.appendChild(cardItem);
}

storedFlashcards.forEach(card => createCardItem(card.front, card.back));

addCardButton.addEventListener('click', () => {
    createCardItem();
    showToast('New card added!');
});

saveCardsButton.addEventListener('click', () => {
    const cards = [];
    const cardItems = document.querySelectorAll('.card-item');
    cardItems.forEach(item => {
        const front = item.querySelector('input:nth-child(1)').value.trim();
        const back = item.querySelector('input:nth-child(2)').value.trim();
        if (front && back) {
            cards.push({ front, back });
        }
    });
    localStorage.setItem('flashcards', JSON.stringify(cards));
    showToast('Cards saved to local storage!');
});

exportCardsButton.addEventListener('click', () => {
    const cards = [];
    const cardItems = document.querySelectorAll('.card-item');
    cardItems.forEach(item => {
        const front = item.querySelector('input:nth-child(1)').value.trim();
        const back = item.querySelector('input:nth-child(2)').value.trim();
        if (front && back) {
            cards.push({ front, back });
        }
    });

    const blob = new Blob([JSON.stringify(cards, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'flashcards.json';
    a.click();

    URL.revokeObjectURL(url);
    showToast('Cards exported as flashcards.json!');
});

importCardsInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) {
        showToast('No file selected.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedCards = JSON.parse(e.target.result);
            if (Array.isArray(importedCards) && importedCards.every(card => card.front && card.back)) {
                cardList.innerHTML = '';
                importedCards.forEach(card => createCardItem(card.front, card.back));

                localStorage.setItem('flashcards', JSON.stringify(importedCards));
                showToast('Cards imported and saved successfully!');
            } else {
                showToast('Invalid file format. Please upload a valid JSON file.');
            }
        } catch (error) {
            showToast('Error reading file. Please upload a valid JSON file.');
        }
    };

    reader.onerror = () => {
        showToast('Error reading file. Please try again.');
    };

    reader.readAsText(file);

    importCardsInput.value = '';
});