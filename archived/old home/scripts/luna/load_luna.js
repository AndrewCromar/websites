document.addEventListener('DOMContentLoaded', () => {
    console.log(imagePaths.ordered);

    const container = document.querySelector('.luna-container');

    imagePaths.ordered.reverse().forEach(imagePath => {
        let isAlive = imagePath.includes("alive");
        let htmlContent = `
            <div class="luna l-${isAlive ? 'alive' : 'dead'}">
                <img src="${imagePath}" alt="${isAlive ? 'alive' : 'dead'}">
                <p>${isAlive ? 'ALIVE' : 'DEAD'}</p>
            </div>
        `;
        container.innerHTML += htmlContent;
    });
});