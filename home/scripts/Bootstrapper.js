function Bootstrapper(_pageTitle, _theme) {
    document.write(`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="../styles/defaults.css">
        <link rel="stylesheet" href="../styles/navbar.css">
        <link rel="stylesheet" href="../styles/luna-image.css">
        <link rel="stylesheet" href="../styles/themes/${_theme}.css">
    
        <div class="title">
            <title>${_pageTitle}</title>
            <h1>${_pageTitle}</h1>
        </div>
    
        <div class="navbar">
            <img src="../images/navbar/home_icon.png" onclick="ToPage('index.html')">
            <img src="../images/navbar/luna_icon.png" onclick="ToPage('luna.html')">
            <hr>
            <img src="../images/navbar/onyx_logo.png" onclick="ToPage('https://onyx.andrewcromar.org/')">
            <img src="../images/navbar/trio-production-logo.png" onclick="ToPage('https://trio.andrewcromar.org/')">
        </div>
    
        <script src="../scripts/ToPage.js"></script>
    `);
}