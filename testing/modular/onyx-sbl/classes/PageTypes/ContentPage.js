class ContentPage extends Page {
  constructor(title, theme, navBar, content) {
    super(title, theme, navBar);
    this.content = content;
  }

  Render() {
    return (
      super.Render() +
      `
        <div class="sbl_content">${this.content}</div>
      `
    );
  }
}
