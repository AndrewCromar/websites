function LoginCode(code) {
  $.ajax({
    url: "../backend/endpoints/ENDPOINT_LoginCode.php",
    type: "POST",
    data: {
      code,
    },
    success: function (response) {
      if (response === "OK") {
        document.location.href = "./dashboard.php";
      } else {
        alert(response);
      }
    },
  });
}

document
  .getElementById("loginCodeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const code = document.getElementById("login_code").value;
    LoginCode(code);
  });

document
  .getElementById("loginCodeButton")
  .addEventListener("click", function () {
    const code = document.getElementById("login_code").value;
    LoginCode(code);
  });
