document.getElementById("edit_id").addEventListener("input", function () {
  const id = this.value;
  if (!id) return;

  $.ajax({
    url: "../backend-old/GetItemById.php",
    type: "GET",
    data: { id },
    dataType: "json",
    success: function (response) {
      if (response.status === "ok") {
        const item = response.item;
        document.getElementById("edit_name").value = item.name;
        document.getElementById("edit_link").value = item.link;
        document.getElementById("edit_price").value = item.price;
      } else {
        document.getElementById("edit_name").value = "";
        document.getElementById("edit_link").value = "";
        document.getElementById("edit_price").value = "";
      }
    },
    error: function (xhr, status, error) {
      console.error("Failed to fetch item:", error);
    },
  });
});

function EditItem(id, name, link, price) {
  $.ajax({
    url: "../backend-old/EditItem.php",
    type: "POST",
    data: { id, name, link, price },
    dataType: "json",
    success: function (response) {
      if (response.status === "ok") {
        console.log("DEV EDIT ITEM:", response);
        document.location.reload();
      } else {
        alert("Failed to edit item: " + (response.message || "Unknown error"));
      }
    },
    error: function (xhr, status, error) {
      alert("Failed to edit item due to server error.");
      console.error("AJAX error:", status, error, xhr.responseText);
    },
  });
}

document
  .getElementById("editItemForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("edit_id").value;
    const name = document.getElementById("edit_name").value;
    const link = document.getElementById("edit_link").value;
    const price = document.getElementById("edit_price").value;
    EditItem(id, name, link, price);
  });

document
  .getElementById("editItemButton")
  .addEventListener("click", function () {
    const id = document.getElementById("edit_id").value;
    const name = document.getElementById("edit_name").value;
    const link = document.getElementById("edit_link").value;
    const price = document.getElementById("edit_price").value;
    EditItem(id, name, link, price);
  });
