function Bootstrapper(_pageTitle, _theme) {
    document.write(`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="../styles/defaults.css">
        <link rel="stylesheet" href="../styles/navbar.css">
        <link rel="stylesheet" href="../styles/catalog.css">
        <link rel="stylesheet" href="../styles/paper.css">
        <link rel="stylesheet" href="../styles/box.css">
        <link rel="stylesheet" href="../styles/vertical-text.css">
        <link rel="stylesheet" href="../styles/focus.css">
        <link rel="stylesheet" href="../styles/album.css">
        <link rel="stylesheet" href="../styles/fullscreen.css">
        <link rel="stylesheet" href="../styles/themes/${_theme}.css">
        
        <div class="title">
        <title>${_pageTitle}</title>
        <h1>${_pageTitle}</h1>
        </div>
        
        <div class="navbar">
        <div><img src="../images/icons/home_icon.png" onclick="ToPage('index.html')"></div>
        <hr>
            <div><img src="../images/icons/fork_and_knife_icon.png" onclick="ToPage('recipes.html')"></div>
            <div><img src="../images/icons/focus_timer.png" onclick="ToPage('focus.html')"></div>
            <div><img src="../images/icons/luna_icon.png" onclick="ToPage('luna.html')"></div>
            <div><img src="../images/icons/bug_icon.png" onclick="ToPage('programming.html')"></div>
            <div><img src="../images/icons/paper_icon.png" onclick="ToPage('less-homework-relates-to-greater-learing.html')"></div>
            <hr>
            <div><img src="../images/covers/three_musketeers_cover_200px.png" style="padding: 5px; width: calc(100% - 10px); height: calc(100% - 10px);" onclick="ToPage('three-musketeers.html')"></div>
            <div><img src="../images/covers/blt_cover.png" style="padding: 5px; width: calc(100% - 10px); height: calc(100% - 10px);" onclick="ToPage('fancy-drew.html')"></div>
            <hr>
            <div><img src="../images/icons/onyx_logo.png" onclick="ToPage('https://onyx.andrewcromar.org/')"></div>
            <div><img src="../images/icons/trio-production-logo.png" style="padding: 5px; width: calc(100% - 10px); height: calc(100% - 10px);" onclick="ToPage('https://trio.andrewcromar.org/')"></div>
            <hr>
            <div><img src="../images/icons/github_icon.png" onclick="ToPage('https://github.com/AndrewCromar')"></div>
            <div><img src="../images/icons/linkedin_icon.png" onclick="ToPage('https://www.linkedin.com/in/andrew-cromar-5257b22ab/')"></div>
            <hr>
            <div><img src="../images/icons/settings_icon.png" onclick="ToPage('settings.html')"></div>
        </div>
            
        <script src="../scripts/ToPage.js"></script>
    `);
}