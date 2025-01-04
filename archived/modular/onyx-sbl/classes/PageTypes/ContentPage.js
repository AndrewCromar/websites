class ContentPage extends Page {
  constructor(title, theme, navBar, content) {
    super(title, theme, navBar);
    this.content = content;
  }

  Render() {
    let finalRender = super.Render();
    finalRender +=
    `
      <div class="sbl_content">${this.content}</div>
      <div id="dotcursor"></div>
    `
    return finalRender;
  }
}
