function setup_page(title){
    document.write(`
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/resume.css">
    <link rel="stylesheet" href="styles/sticky_navbar.css">

    <div class="title-area">
        <center><h1>${title}<h1></center>
        <title>Andrew Cromar</title>
    </div>

    <div class="navbar">
        <a class="nav-button" href="index.html">Home</a>
        <a class="nav-button" href="programming.html">Programming</a>
        <a class="nav-button" href="Resume.html">resume</a>
    </div>

    <script src="scripts/sticky_navbar.js"></script>
`);
}
