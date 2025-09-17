function generateRecipes(recipes) {
  const container = document.querySelector(".content");

  recipes.forEach(recipe => {
    // Create dropdown container
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown-container";
    dropdown.style.width = "100%";

    // Header
    dropdown.innerHTML = `
      <div class="dropdown-header">
        <img src="../images/icons/dropdown_arrow_icon.png" alt="Arrow">
        <p>${recipe.title}</p>
      </div>
      <div class="dropdown-content">
        <div id="fullscreen_box" class="fullscreenable fullscreen_closed">
          <div id="fullscreen_allowCenter">
            <div class="side-by-side">
              <div class="box">
                <div class="box-header">
                  <p>Ingredients</p>
                </div>
                <div class="box-content">
                  <ul>
                    ${recipe.ingredients.map(ing => `
                      <li><p><span style="font-weight: bold;">${ing.amount}</span> ${ing.item}</p></li>
                    `).join("")}
                  </ul>
                </div>
              </div>
              <div class="box">
                <div class="box-header">
                  <p>Directions</p>
                </div>
                <div class="box-content">
                  <ol>
                    ${recipe.directions.map(step => `
                      <li><p>${step}</p></li>
                    `).join("")}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div id="fullscreen_open" class="fullscreen_button" onclick="fullscreen_openButton()">
            <img src="../images/icons/fullscreen.png">
          </div>
          <div id="fullscreen_close" class="fullscreen_button" onclick="fullscreen_closeButton()" style="display: none;">
            <img src="../images/icons/close.png">
          </div>
        </div>
      </div>
    `;

    container.appendChild(dropdown);
  });
}

generateRecipes(recipes);