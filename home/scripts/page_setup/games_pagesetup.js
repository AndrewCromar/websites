function Header(title, icon_path){
    document.write(`
        <link rel="stylesheet" href="../../styles/style.css">
        <link rel="stylesheet" href="../../styles/sticky_navbar.css">

        <script src="../../scripts/loading_transition.js"></script>

        <div class="header">
            <center><h1 style="font-weight: bold;">${title}</h1></center>
            <title>Andrew Cromar</title>
        </div>
        
        <div id="navbar">
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, '../andrewcromar/home.html')">andrewcromar.org</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, 'games.html')">Games</a>
            <a class="nav-button" onclick="navigateWithLoadingScreen(event, 'hippo.html')">Hippo</a>

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
            <!-- Youtube Link -->
            <div class="dropup">
                <button class="dropbtn youtube"><img src="../../images/logos/youtube_text.png"></button>
                <div class="dropup-content">
                <a target="_blank" href="https://www.youtube.com/@ONYXDevelopment">@OnyxDevelopment</a>
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