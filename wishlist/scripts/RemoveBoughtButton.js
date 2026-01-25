document.getElementById("removeBoughtButton").addEventListener("click", function () {
  if (!confirm("Are you sure you want to remove all bought items?")) return;

  $.ajax({
    url: "../backend/RemoveBoughtItems.php",
    type: "POST",
    dataType: "json",
    success: function(response) {
      if (response.status === "ok") {
        console.log("All bought items removed");
        document.location.reload();
      } else {
        alert("Failed to remove bought items: " + (response.message || "Unknown error"));
      }
    },
    error: function(xhr, status, error) {
      console.error("AJAX error:", error);
      alert("Failed to remove bought items due to server error.");
    }
  });
});
