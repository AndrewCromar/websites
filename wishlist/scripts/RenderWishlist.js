function RenderWishlist() {
  $.ajax({
    url: "../backend/endpoints/ENDPOINT_GetUserItems.php",
    type: "POST",
    dataType: "json",
    success: function (response) {
      if (response.status === "OK") {
        const wishlistContainer =
          document.getElementsByClassName("wishlist-groups")[0];
        wishlistContainer.innerHTML = null;

        const { items, groups } = response.data;

        // Create a map of group_id to group name
        const groupMap = {};
        groups.forEach((group) => {
          groupMap[group.id] = group.name;
        });

        // Group items by group_id
        const groupedItems = {};
        items.forEach((item) => {
          const groupId = item.group_id || "ungrouped";
          if (!groupedItems[groupId]) {
            groupedItems[groupId] = [];
          }
          groupedItems[groupId].push(item);
        });

        // Render grouped items
        Object.keys(groupedItems).forEach((groupId) => {
          const groupName =
            groupId === "ungrouped" ? "Ungrouped" : groupMap[groupId];
          wishlistContainer.appendChild(
            GenerateWishlistGroup(groupName, groupedItems[groupId]),
          );
        });
      } else {
        alert(response.status + " " + response.error);
      }
    },
  });
}

function GenerateWishlistGroup(name, items) {
  const wrapper = document.createElement("div");
  wrapper.className = "dropdown open";

  const header = document.createElement("div");
  header.onclick = function () {
    ToggleDropdown(wrapper);
  };

  const caretIcon = document.createElement("i");
  caretIcon.className = "fa-solid fa-caret-down";

  const title = document.createElement("p");
  title.textContent = name;

  header.appendChild(caretIcon);
  header.appendChild(title);

  const content = document.createElement("div");
  content.className = "wishlist-container";
  items.forEach((item) => {
    content.appendChild(
      GenerateWishlistItem(
        item.name,
        item.link,
        item.price,
        item.money_saved,
        item.id,
      ),
    );
  });

  wrapper.appendChild(header);
  wrapper.appendChild(content);

  return wrapper;
}

function GenerateWishlistItem(name, url, price, money_saved, id) {
  const percent = Math.min(price > 0 ? Math.round((money_saved / price) * 100) : 0, 100);

  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <p>
      -&nbsp;
      <span><a href="${url}">${name}</a></span>&nbsp;
      <span>$${money_saved} / $${price} (${percent}%)</span>&nbsp;
      <span>#${id}</span>
    </p>
    <div><div style="width:${percent}%;"></div></div>
  `;

  return wrapper;
}

RenderWishlist();
