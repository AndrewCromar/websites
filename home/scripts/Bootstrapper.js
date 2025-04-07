function Bootstrapper(_pageTitle, _theme) {
    document.write(`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="../styles/defaults.css">
        <link rel="stylesheet" href="../styles/navbar.css">
        <link rel="stylesheet" href="../styles/catalog.css">
        <link rel="stylesheet" href="../styles/paper.css">
        <link rel="stylesheet" href="../styles/vertical-text.css">
        <link rel="stylesheet" href="../styles/themes/${_theme}.css">
        
        <div class="title">
        <title>${_pageTitle}</title>
        <h1>${_pageTitle}</h1>
        </div>
        
        <div class="navbar">
        <div><img src="../images/navbar/home_icon.png" onclick="ToPage('index.html')"></div>
        <hr>
            <div><img src="../images/navbar/luna_icon.png" onclick="ToPage('luna.html')"></div>
            <div><img src="../images/navbar/code_icon.png" style="padding: 5px; width: calc(100% - 10px); height: calc(100% - 10px);" onclick="ToPage('languages-and-software.html')"></div>
            <div><img src="../images/navbar/paper_icon.png" onclick="ToPage('less-homework-relates-to-greater-learing.html')"></div>
            <div><img src="../images/navbar/clock_icon.png" onclick="ToPage('school-countdown.html')"></div>
            <hr>
            <div><img src="../images/navbar/onyx_logo.png" onclick="ToPage('https://onyx.andrewcromar.org/')"></div>
            <div><img src="../images/navbar/trio-production-logo.png" style="padding: 5px; width: calc(100% - 10px); height: calc(100% - 10px);" onclick="ToPage('https://trio.andrewcromar.org/')"></div>
            <hr>
            <div><img src="../images/navbar/github_icon.png" onclick="ToPage('https://github.com/AndrewCromar')"></div>
            <div><img src="../images/navbar/linkedin_icon.png" onclick="ToPage('https://www.linkedin.com/in/andrew-cromar-5257b22ab/')"></div>
        </div>
            
        <script src="../scripts/ToPage.js"></script>
        <script src="../scripts/Countdown..js"></script>
    `);
}