document.getElementById("edit_id").addEventListener("input", function () {
  const itemId = this.value;

  if (!itemId || itemId === "") {
    document.getElementById("edit_name").value = "";
    document.getElementById("edit_link").value = "";
    document.getElementById("edit_price").value = "";
    return;
  }

  $.ajax({
    url: "../backend/endpoints/ENDPOINT_GetItemById.php",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      itemId: parseInt(itemId),
    }),
    dataType: "json",
    success: function (response) {
      if (response.status === "OK") {
        const item = response.data;
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
      document.getElementById("edit_name").value = "";
      document.getElementById("edit_link").value = "";
      document.getElementById("edit_price").value = "";
    }
  });
});

document.getElementById("editItemForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("edit_id").value;
  const name = document.getElementById("edit_name").value;
  const link = document.getElementById("edit_link").value;
  const price = document.getElementById("edit_price").value;
  EditItem(id, name, link, price);
});

document.getElementById("editItemButton").addEventListener("click", function () {
  const id = document.getElementById("edit_id").value;
  const name = document.getElementById("edit_name").value;
  const link = document.getElementById("edit_link").value;
  const price = document.getElementById("edit_price").value;
  EditItem(id, name, link, price);
});

function EditItem(id, name, link, price) {
  $.ajax({
    url: "../backend/endpoints/ENDPOINT_EditItem.php",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      itemId: parseInt(id),
      name,
      link,
      price,
    }),
    dataType: "json",
    success: function (response) {
      if (response.status === "OK") {
        document.location.reload();
      } else {
        alert("Error: " + (response.error || response.message));
      }
    },
    error: function (xhr, status, error) {
      alert("Request failed: " + error);
    }
  });
}
