document.write(`<link rel="stylesheet" href="../styles/dropdown.css">`);

const dropdownHeaders = document.querySelectorAll('.dropdown-header');

dropdownHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = "0 15px";
            header.classList.remove('open');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "10px 15px";
            header.classList.add('open');
        }
    });
});