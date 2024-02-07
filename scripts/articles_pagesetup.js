function Header(title, icon_path){
    document.write(`
        <link rel="stylesheet" href="../../styles/style.css">
        <link rel="stylesheet" href="../../styles/sticky_navbar.css">
        
        <div class="header">
            <center><h1 style="font-weight: bold;">${title}</h1></center>
            <title>Andrew Cromar</title>
        </div>
        
        <div id="navbar">
            <a class="nav-button" href="../andrewcromar/home.html">andrewcromar.org</a>
            <a class="nav-button" href="articles.html">Articles</a>
            <a class="nav-button" href="lhrgl.html">LHRGL</a>
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
            <span style="line-height: 50px;">.</span>
        </div>
    `);
}