let modalCallback = null;

function showModal(text, callback = null) {
    const modalContainer = document.querySelector('.modal_container');
    const modalText = document.querySelector('.modal_text');
    const closeButton = document.querySelector('.modal_closeButton');

    if (!modalContainer || !modalText || !closeButton) {
        console.error('Modal elements not found.');
        return;
    }

    modalText.textContent = text;
    modalContainer.style.display = 'flex';

    modalCallback = callback;

    const closeModal = () => {
        modalContainer.style.display = 'none';
        if (modalCallback) {
            modalCallback();
        }
    };

    closeButton.removeEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
}

function onModalClosed(callback) {
    modalCallback = callback;
}

function loadModal() {
    document.writeln('<link rel="stylesheet" href="../styles/modal.css">');

    fetch('../scripts/modal/modal.html')
        .then(response => response.text())
        .then(html => {
            const div = document.createElement('div');
            div.innerHTML = html;
            document.body.appendChild(div);
        })
        .catch(err => console.error('Error loading modal HTML:', err));
}

loadModal();
