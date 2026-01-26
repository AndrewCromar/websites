function AddItem(name, link, price) {
  $.ajax({
    url: "../backend-old/AddItem.php",
    type: "POST",
    data: {
      name,
      link,
      price,
    },
    success: function (response) {
      if (response === "OK") {
        console.log("DEV ADD ITEM:", response);
        document.location.reload();
      } else {
        alert("Failed to add item.");
      }
    },
  });
}

document.getElementById("addItemForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("add_name").value;
  const link = document.getElementById("add_link").value;
  const price = document.getElementById("add_price").value;
  AddItem(name, link, price);
});

document.getElementById("addItemButton").addEventListener("click", function () {
  const name = document.getElementById("add_name").value;
  const link = document.getElementById("add_link").value;
  const price = document.getElementById("add_price").value;
  AddItem(name, link, price);
});
