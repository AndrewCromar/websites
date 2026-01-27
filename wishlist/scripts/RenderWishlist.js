function RenderWishlist() {
  $.ajax({
    url: "../backend/endpoints/ENDPOINT_GetUserItems.php",
    type: "POST",
    dataType: "json",
    success: function (response) {
      if (response.status === "OK") {
        const wishlistContainer =
          document.getElementsByClassName("wishlist-container")[0];
        wishlistContainer.innerHTML = null;

        response.data.forEach((item) => {
          wishlistContainer.appendChild(
            GenerateWishlistItem(
              item.name,
              item.link,
              item.price,
              item.money_saved,
              item.id,
            ),
          );
        });
      } else {
        alert(response.status + " " + response.error);
      }
    },
  });
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
