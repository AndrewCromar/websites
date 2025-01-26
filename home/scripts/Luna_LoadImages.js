const script = document.createElement('script');
script.src = "../images/luna/processed_images.js";
document.head.appendChild(script);

script.onload = () => {
    const container = document.querySelector('.luna-image-container');

    processed_images.forEach((image) => {
        const img = document.createElement('img');
        img.classList.add('luna-image');
        img.src = `../images/luna/${image}`;
        container.appendChild(img);
    });
};
