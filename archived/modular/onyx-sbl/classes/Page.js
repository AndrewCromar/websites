class Page {
  constructor(title, theme, navBar) {
    this.title = title;
    this.theme = theme;
    this.navBar = navBar;
  }

  Render() {
    return `
      <style>
          :root {
              --color: ${this.theme.color};
              --background: ${this.theme.background};
              --secondary-background: ${this.theme.secondaryBackground};
              --accent: ${this.theme.accent};
              --hover: ${this.theme.hover};
              
              ${this.theme.fontData.css}
          }
      </style>
      <div>
          <title>${this.title}</title>
          <br><center><h1>${this.title}</h1></center><br>
          <div>${this.navBar.Render()}</div>
      </div>
    `;
  }
}
