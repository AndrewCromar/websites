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
    document.write(`
        <link rel="stylesheet" href="../styles/modal.css">

        <div class="modal_container" style="display:none;">
            <div class="modal">
                <a class="modal_closeButton">
                    <img src="../images/icons/close.png" alt="Close" />
                </a>
                <p class="modal_text">This is a modal message</p>
            </div>
        </div>
    `);
}

loadModal();
