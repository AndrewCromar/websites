// ---------- Is User Logged In ----------
function IsUserLoggedIn() {
  $.ajax({
    url: "../backend/IsUserLoggedIn.php",
    type: "GET",
    success: function (response) {
      if (response == true) {
        $("#loggedout_area").hide();
        $("#loggedin_area").show();

        FillUserInfo();
      } else {
        $("#loggedout_area").show();
        $("#loggedin_area").hide();
      }
    },
    error: function (xhr, status, error) {
      console.error("AJAX 1 request failed:", error);
      console.error("Response text:", xhr.responseText);
    },
  });
}

function FillUserInfo() {
  $.ajax({
    url: "../backend/GetUserInfo.php",
    type: "GET",
    dataType: "json",
    success: function (response) {
      $("#userinfo_fullname").html(
        response.firstName + " " + response.lastName
      );

      $("#userinfo_username").html(response.username);
      $("#userinfo_firstName").html(response.firstName);
      $("#userinfo_lastName").html(response.lastName);
      $("#userinfo_email").html(response.email);
      $("#userinfo_userId").html(response.userId);

      var roleText = "";
      response.roles.forEach((role) => {
        roleText +=
          "<br>&nbsp;&nbsp;&nbsp;&nbsp;> " + CapitalizeFirstLetter(role) + ".";
      });

      $("#userinfo_roles").html(roleText);

      $("#userinfo_creationDate").html(response.creationDate);
    },
    error: function (xhr, status, error) {
      console.error("Status:", status);
      console.error("AJAX 2 request failed:", error);
      console.error("Response text:", xhr.responseText);
    },
  });
}

IsUserLoggedIn();
