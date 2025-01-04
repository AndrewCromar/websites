class Theme {
  constructor(fontData, color, accent, background, secondaryBackground, hover) {
    this.fontData = fontData;
    this.color = color;
    this.accent = accent;
    this.background = background;
    this.secondaryBackground = secondaryBackground;
    this.hover = hover;
  }
}

// class BuiltInThemes {
//   constructor() {
//     //#region defaultFontData
//     this.defaultFontData = new FontData(
//       `
//           <link rel="preconnect" href="https://fonts.googleapis.com">
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//           <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap" rel="stylesheet">
//         `,
//       `
//           font-family: "Roboto", sans-serif;
//           font-weight: 400;
//           font-style: normal;
//         `
//     );
//     //#endregion

//     this.homeDark = new Theme(
//       this.defaultFontData,
//       "#ffffff",
//       "#fa8e1b",
//       "#1a1a1a",
//       "#1f1f1f",
//       "#fa8e1b"
//     );

//     this.homeLight = new Theme(
//       this.defaultFontData,
//       "#ffffff",
//       "#fa8e1b",
//       "#1a1a1a",
//       "#1f1f1f",
//       "#fa8e1b"
//     );
//   }
// }

function BuiltInTheme(themeName) {
  //#region defaultFontData
  defaultFontData = new FontData(
    `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap" rel="stylesheet">
    `,
    `
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-style: normal;
    `
  );
  //#endregion

  const themes = {
    homeDark: new Theme(
      defaultFontData,
      "#ffffff",
      "#fa8e1b",
      "#1a1a1a",
      "#1f1f1f",
      "#fa8e1b"
    ),
    homeLight: new Theme(
      defaultFontData,
      "#000000",
      "#fa8e1b",
      "#ffffff",
      "#e0e0e0",
      "#fa8e1b"
    ),
  };

  return themes[themeName] || null;
}
