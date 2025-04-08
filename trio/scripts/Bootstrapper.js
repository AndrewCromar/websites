function Bootstrapper(_pageTitle, _theme) {
    document.write(`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="../styles/defaults.css">
        <link rel="stylesheet" href="../styles/navbar.css">
        <link rel="stylesheet" href="../styles/catalog.css">
        <link rel="stylesheet" href="../styles/album.css">
        <link rel="stylesheet" href="../styles/vertical-text.css">
        <link rel="stylesheet" href="../styles/themes/${_theme}.css">
        
        <div class="title">
        <title>${_pageTitle}</title>
        <h1>${_pageTitle}</h1>
        </div>
        
        <div class="navbar">
            <div><img src="../images/navbar/home_icon.png" onclick="ToPage('index.html')"></div>
            <hr>
            <div><img src="../images/navbar/music_icon.png" onclick="ToPage('music.html')"></div>
            <div><img src="../images/navbar/films_icon.png" onclick="ToPage('films.html')"></div>
        </div>
            
        <script src="../scripts/ToPage.js"></script>
        <script src="../scripts/Countdown.js"></script>
    `);
}