function RemoveItem(id) {
  $.ajax({
    url: "../backend/RemoveItem.php",
    type: "POST",
    data: {
      id,
    },
    success: function (response) {
      if (response === "OK") {
        console.log("DEV REMOVE ITEM:", response);
        document.location.reload();
      } else {
        alert("Failed to remove item.");
      }
    },
  });
}

document
  .getElementById("removeItemForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("remove_id").value;
    RemoveItem(id);
  });

document
  .getElementById("removeItemButton")
  .addEventListener("click", function () {
    const id = document.getElementById("remove_id").value;
    RemoveItem(id);
  });
