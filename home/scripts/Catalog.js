function LoadCatalog(_dir, _parentClass){
    const script = document.createElement('script');
    script.src = `${_dir}/processed_images.js`;
    document.head.appendChild(script);
    
    script.onload = () => {
        const container = document.querySelector(`.${_parentClass}`);
    
        processed_images.forEach((image) => {
            const img = document.createElement('img');
            img.classList.add('catalog-image');
            img.src = `${_dir}/${image}`;
            container.appendChild(img);
        });
    };
}