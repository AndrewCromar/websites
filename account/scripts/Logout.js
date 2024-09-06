$(document).ready(function () {
  $("#logoutForm").submit(function (event) {
    event.preventDefault();

    $.ajax({
      url: "../backend/Logout.php",
      type: "POST",
      data: {
        action: "Logout"
      },
      success: function (response) {
        $("#logout_output").html(response);
        window.location.reload();
      },
      error: function (xhr, status, error) {
        $("#logout_output").html("<p>An error occurred: " + error + "</p>");
      },
    });
  });
});
