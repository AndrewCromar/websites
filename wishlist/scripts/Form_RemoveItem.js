function RemoveItem(id) {
  $.ajax({
    url: "../backend-old/RemoveItem.php",
    type: "POST",
    data: { id },
    dataType: "json",
    success: function (response) {
      if (response.status === "ok") {
        document.location.reload();
      } else {
        alert("Failed to remove item: " + (response.message || "Unknown error"));
      }
    },
    error: function (xhr, status, error) {
      alert("Failed to remove item due to server error.");
      console.error("AJAX error:", status, error, xhr.responseText);
    }
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
