function LoginEmail(email) {
  $.ajax({
    url: "../backend/endpoints/ENDPOINT_LoginEmail.php",
    type: "POST",
    data: {
      email,
    },
    success: function (response) {
      if (response.toString().includes("OK")) {
        document.getElementById("loginEmailForm").style.display = "none";
        document.getElementById("loginCodeForm").style.display = "flex";

        if (response.toString().includes("DEV CODE")) { alert(response); }
      } else {
        alert(response);
      }
    },
  });
}

document
  .getElementById("loginEmailForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login_email").value;
    LoginEmail(email);
  });

document
  .getElementById("loginEmailButton")
  .addEventListener("click", function () {
    const email = document.getElementById("login_email").value;
    LoginEmail(email);
  });
