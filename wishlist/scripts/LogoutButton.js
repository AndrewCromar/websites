document.getElementById("logoutButton").addEventListener("click", function () {
  fetch("../backend-old/Logout.php", { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "ok") {
        window.location.href = "./login.php";
      } else {
        alert("Failed to logout: " + (data.message || "Unknown error"));
      }
    })
    .catch((err) => {
      console.error("Logout failed:", err);
      alert("Failed to logout due to server error.");
    });
});
