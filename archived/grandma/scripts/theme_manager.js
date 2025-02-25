const currentTheme = localStorage.getItem("theme");
if(currnetTheme == null) localStorage.setItem("theme", "light");

function loadTheme(article) {
    let pathPrefix = "";
    if (article) pathPrefix = "../"; 
    document.write(`<link rel="stylesheet" href="${pathPrefix}styles/themes/${localStorage.getItem("theme")}.css">`);
}

function setTheme(theme){
    localStorage.setItem("theme", theme);
    window.location.reload();
}