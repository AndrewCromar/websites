function RenderItems(firstRender = false) {
  $.ajax({
    url: "../backend/GetUserItemsENDPOINT.php",
    type: "GET",
    dataType: "json",
    success: function (items) {
      const wishlist = document.getElementById("wishlistItems");
      wishlist.innerHTML = "";

      const unboughtItems = items.filter((item) => !item.bought);
      const boughtItems = items.filter((item) => item.bought);

      const renderItem = (item, bought = false) => {
        const li = document.createElement("li");
        li.style.marginBottom = "5px";

        const div = document.createElement("div");
        div.classList.add("item");

        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.textContent = item.name;
        if (bought) a.style.textDecoration = "line-through";
        div.appendChild(a);

        const spacer = document.createElement("p");
        spacer.innerHTML = "&nbsp;";
        div.appendChild(spacer);

        const progressBar = document.createElement("div");
        progressBar.classList.add("progressBar");

        let percent = 0;
        if (item.price > 0) {
          percent = Math.min((item.money_saved / item.price) * 100, 100);
        }

        const progressText = document.createElement("p");
        progressText.textContent = `$${item.money_saved} / $${item.price} (${Math.floor(percent)}%)`;
        if (bought) progressText.style.textDecoration = "line-through";
        progressBar.appendChild(progressText);

        const progressSpacer = document.createElement("p");
        progressSpacer.innerHTML = "&nbsp;";
        progressBar.appendChild(progressSpacer);

        const progressOuter = document.createElement("div");
        const progressInner = document.createElement("div");
        progressInner.style.width = percent + "%";

        progressOuter.appendChild(progressInner);
        progressBar.appendChild(progressOuter);

        div.appendChild(progressBar);

        if (percent >= 100 && !bought) {
          const markBoughtBtn = document.createElement("button");
          markBoughtBtn.type = "button";
          markBoughtBtn.textContent = "Mark Bought";
          markBoughtBtn.onclick = function () {
            MarkBought(item.id);
          };
          div.appendChild(markBoughtBtn);
        }

        const itemIdSpan = document.createElement("span");
        itemIdSpan.textContent = `#${item.id}`;
        itemIdSpan.style.fontSize = "smaller";
        itemIdSpan.style.color = "var(--text-color-muted)";
        itemIdSpan.style.marginLeft = "5px";
        div.appendChild(itemIdSpan);

        li.appendChild(div);
        wishlist.appendChild(li);
      };

      unboughtItems.forEach((item) => renderItem(item, false));
      boughtItems.forEach((item) => renderItem(item, true));
    },
    error: function (xhr, status, error) {
      console.error("Failed to fetch items:", error);
    },
  });

  if (firstRender) {
    setTimeout(OpenWishlistDropdown, 100);
  }
}

function OpenWishlistDropdown() {
  const wishlistDropdown = document.querySelector(".dropdown.startOpen");
  if (wishlistDropdown) {
    Dropdown(wishlistDropdown);
  }
}

RenderItems(true);
