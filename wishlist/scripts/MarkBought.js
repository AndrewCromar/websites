function MarkBought(id) {
  $.post("../backend/MarkItemBought.php", { id: id }, function(response) {
    if (response === "OK") {
      RenderItems();
    } else {
      alert("Failed to mark item as bought.");
    }
  });
}
