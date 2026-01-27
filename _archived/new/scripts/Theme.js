function SetTheme(theme) {
  localStorage.setItem("theme", theme);
  LoadTheme();
}

function LoadTheme() {
  let themeLink = document.querySelector("link.theme");

  if (!themeLink) {
    themeLink = document.createElement("link");
    themeLink.rel = "stylesheet";
    themeLink.className = "theme";
    document.head.appendChild(themeLink);
  }

  if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");

  themeLink.href = `../themes/${localStorage.getItem("theme")}.css`;

  console.log("Theme loaded:", localStorage.getItem("theme"));
}

window.addEventListener("DOMContentLoaded", LoadTheme);
