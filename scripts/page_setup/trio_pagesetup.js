function Header(title, icon_path){
    document.write(`
        <link rel="stylesheet" href="../../styles/style.css">
        <link rel="stylesheet" href="../../styles/sticky_navbar.css">

        <script src="../../scripts/loading_transition.js"></script>

        <div class="header">
            <center><h1 style="font-weight: bold;">${title}</h1></center>
            <link rel="stylesheet" href="../../styles/loading.css">
    
            <div class="loading-screen"><img src="../../images/loading.png"></div>
            <title>Andrew Cromar</title>
        </div>
        
        <div id="navbar">
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, '../andrewcromar/home.html')">andrewcromar.org</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, 'trio-productions.html')">Trio Productions</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, 'the-world-in-the-closet.html')">TWITC</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, 'releases.html')">Releases</a>

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
            <!-- Youtube Links -->
            <div class="dropup">
                <button class="dropbtn youtube"><img src="../../images/logos/youtube_text.png"></button>
                <div class="dropup-content">
                <a target="_blank" href="https://www.youtube.com/watch?v=nw6acf2nSy4">The World In The Closet</a>
                </div>
            </div>

            <!-- Discord Links -->
            <div class="dropup">
                <button class="dropbtn discord"><img src="../../images/logos/discord_text.png"></button>
                <div class="dropup-content">
                <a target="_blank" href="https://discord.gg/mhDhWdkWeB">Trio Productions</a>
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