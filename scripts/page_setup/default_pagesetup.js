function Header(title, icon_path){
    document.write(`
        <link rel="stylesheet" href="../../styles/style.css">
        <link rel="stylesheet" href="../../styles/sticky_navbar.css">

        <script src="../../scripts/loading_transition.js"></script>

        <div class="header">
            <center><h1 style="font-weight: bold;">${title}<h1></center>
            <title>Andrew Cromar</title>
        </div>

        <div id="navbar">
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, 'home.html')">Home</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, 'programming.html')">Programming</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, '../articles/articles.html')">Articles</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, '../onyx/onyx-development.html')">ONYX Development</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, '../trio/trio-productions.html')">Trio Productions</a>
            <!-- <a class="nav-button" onclick="navigateWithLoadingScreen(event, '../games/games.html')">Games</a> -->
            
            <img class="icon" src="${icon_path}">
        </div>
    `);
}


function Theme(theme){
    document.write(`
        <link rel="stylesheet" href="../../styles/themes/${theme}.css">
    `);
}

function Footer(){
    document.write(`
        <script src="../../scripts/sticky_navbar.js"></script>

        <br>
        <br>
        <br>
        <br>

        <div class="footer">
            <!-- Github Links -->
            <div class="dropup">
                <button class="dropbtn github"><img src="../../images/logos/github_text.png"></button>
                <div class="dropup-content">
                <a target="_blank" href="https://github.com/AndrewCromar">AndrewCromar</a>
                <a target="_blank" href="https://github.com/AndrewCromar/Juicy-Player-Controller">Juicy Player Controller</a>
                <a target="_blank" href="https://github.com/AndrewCromar/Juicy-Player-Controller/blob/main/Docs/documentation.md">Juicy Documentation</a>
                </div>
            </div>

            <!-- Youtube Link -->
            <div class="dropup">
                <button class="dropbtn youtube"><img src="../../images/logos/youtube_text.png"></button>
                <div class="dropup-content">
                <a target="_blank" href="https://www.youtube.com/@ONYXDevelopment">@OnyxDevelopment</a>
                </div>
            </div>

            <!-- Linkedin Link -->
            <div class="dropup">
                <button class="dropbtn linkedin"><img src="../../images/logos/linkedin_text.png"></button>
                <div class="dropup-content">
                <a target="_blank" href="https://www.linkedin.com/in/andrew-cromar-5257b22ab/">Andrew Cromar</a>
                </div>
            </div>

            <!-- Discord Links -->
            <div class="dropup">
                <button class="dropbtn discord"><img src="../../images/logos/discord_text.png"></button>
                <div class="dropup-content">
                <a target="_blank" href="https://discord.gg/2maTr7RQQQ">ONYX Development</a>
                </div>
            </div>

            <div class="rm-container">
                <p>Reduced Motion</p>
                <label class="switch">
                    <input class="rm-toggle" type="checkbox">
                    <span class="slider"></span>
                </label>
            </div>
        </div>

        <script src="../../scripts/reduced_motion.js"></script>
    `);
}