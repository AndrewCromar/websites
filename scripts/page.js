function Header(title, icon_path){
    document.write(`
        <link rel="stylesheet" href="styles/style.css">
        <link rel="stylesheet" href="styles/sticky_navbar.css">

        <div class="header">
            <center><h1 style="font-weight: bold;">${title}<h1></center>
            <title>Andrew Cromar</title>
        </div>

        <div id="navbar">
            <a class="nav-button" href="index.html">Home</a>
            <a class="nav-button" href="programming.html">Programming</a>
            <a class="nav-button" href="resume.html">Resume</a>
            <a class="nav-button" href="onyx/onyx.html">ONYX</a>
            <img class="icon" src="${icon_path}">
        </div>
    `);
}

function Theme(theme){
    document.write(`
        <link rel="stylesheet" href="styles/themes/${theme}.css">
    `);
}

function Footer(){
    document.write(`
        <script src="scripts/sticky_navbar.js"></script>

        <br>
        <br>
        <br>
        <br>

        <div class="footer">
            <a class="social github" target="_blank" href="https://github.com/AndrewCromar"><img src="images/logos/github_text.png"></a>
            <a class="social youtube" target="_blank" href="https://www.youtube.com/@ONYXDevelopment"><img src="images/logos/youtube_text.png"></a>
            <a class="social linkedin" target="_blank" href="https://www.linkedin.com/in/andrew-cromar-5257b22ab/"><img src="images/logos/linkedin_text.png"></a>
            <a class="social discord" target="_blank" href="https://discord.gg/2maTr7RQQQ"><img src="images/logos/discord_text.png"></a>
        </div>
    `);
}