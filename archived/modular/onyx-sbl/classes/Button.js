class Button {
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }

  Render() {
    return `<div class="sbl_button" onclick="window.location.href='${this.url}'"><a>${this.title}</a></div>`;
  }
}
