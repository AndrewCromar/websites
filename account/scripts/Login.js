$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();

    var username = $("#login_username").val();
    var password = $("#login_password").val();

    $.ajax({
      url: "../backend/Login.php",
      type: "POST",
      data: {
        username: username,
        password: password,
      },
      success: function (response) {
        console.log(response);
        if (response == true) {
          window.location.reload();
        } else {
          $("#login_output").show();
          $("#login_output").html("<p>" + response.message + "</p>");
        }
      },
      error: function (xhr, status, error) {
        $("#login_output").show();
        $("#login_output").html("<p>An error occurred: " + error + "</p>");
      },
    });
  });
});
