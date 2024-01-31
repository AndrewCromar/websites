function setup_page(title){
    document.write(`
        <link rel="stylesheet" href="styles/style.css">
        <link rel="stylesheet" href="styles/resume.css">
        <link rel="stylesheet" href="styles/sticky_navbar.css">
        <link rel="stylesheet" href="styles/project.css">

        <div class="header">
            <center><h1 style="font-weight: bold;">${title}<h1></center>
            <title>Andrew Cromar</title>
        </div>

        <div id="navbar">
            <a class="nav-button" href="index.html">Home</a>
            <a class="nav-button" href="programming.html">Programming</a>
            <a class="nav-button" href="resume.html">Resume</a>
            <a class="nav-button" href="onyx/onyx.html">ONYX</a>
            <img class="icon" src="images/favicon.png">
        </div>
    `);
}
