document.write(`<link rel="stylesheet" href="../styles/image-comparison.css">`);

const imageComparisonContainers = document.querySelectorAll('.image-comparison-container');

imageComparisonContainers.forEach(container => {
    const handle = container.querySelector('.image-comparison-handle');
    const afterImage = container.querySelector('.after-image');

    const updateComparison = (clientX) => {
        const rect = container.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
        handle.style.left = `${percentage * 100}%`;
        afterImage.style.clipPath = `inset(0 0 0 ${percentage * 100}%)`; // Adjust clip-path to match the new layout
    };

    container.addEventListener('mousemove', (e) => {
        updateComparison(e.clientX);
    });

    container.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        updateComparison(touch.clientX);
    });
});