class Button {
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }

  Render() {
    return `<div class="sbl_button"><a href="${this.url}">${this.title}</a></div>`;
  }
}
