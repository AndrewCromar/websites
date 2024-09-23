class NavBar {
  constructor(navButtons) {
    this.navButtons = navButtons;
  }

  Render() {
    let finalRender = `<div class="sbl_navBar">`;
    this.navButtons.forEach((button) => {
      finalRender += button.Render();
    });
    finalRender += "</div>";
    return finalRender;
  }
}
