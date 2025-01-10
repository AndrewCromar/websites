$(document).ready(function () {
  $("#registerForm").submit(async function (event) {
    event.preventDefault();

    var username = $("#register_username").val();
    var password = $("#register_password").val();
    var firstname = $("#register_firstname").val();
    var lastname = $("#register_lastname").val();
    var email = $("#register_email").val();

    try {
      var ip = await GetUserIP();

      $.ajax({
        url: "../backend/Register.php",
        type: "POST",
        data: {
          username: username,
          password: password,
          firstname: firstname,
          lastname: lastname,
          email: email,
          ip: ip,
        },
        success: function (response) {
          console.log(response);
          if (response == true) {
            Login(username, password);
            // window.location.reload();
          } else {
            $("#register_output").show();
            $("#register_output").html("<p>" + response.message + "</p>");
          }
        },
        error: function (xhr, status, error) {
          $("#register_output").show();
          $("#register_output").html("<p>An error occurred: " + error + "</p>");
        },
      });
    } catch (error) {
      console.error("Failed to fetch IP address:", error);
      $("#register_output").show();
      $("#register_output").html("<p>Failed to fetch IP address.</p>");
    }
  });
});
