function Logout() {
  $.ajax({
    url: "../backend/endpoints/ENDPOINT_Logout.php",
    type: "POST",
    success: function (response) {
      if (response === "OK") {
        document.location.href = "./login.php";
      } else {
        alert(response);
      }
    },
  });
}
