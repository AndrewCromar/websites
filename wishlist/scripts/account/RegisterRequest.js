function RegisterRequest(email, note) {
  $.ajax({
    url: "../backend/endpoints/ENDPOINT_RegisterRequest.php",
    type: "POST",
    data: { email, note },
    dataType: "json",
    success: function (response) {
      if (response.status === "OK") {
        document.getElementById("registerForm").style.display = "none";
        const out = document.getElementById("register_output");
        out.hidden = false;
        out.innerText = "Thanks — your register request is being reviewed. We'll get back to you if needed.";
      } else {
        alert(response.status + " " + response.error);
      }
    },
    error: function (xhr, status, err) {
      alert("Request failed: " + status);
    },
  });
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("register_email").value;
  const note = document.getElementById("register_note").value;
  RegisterRequest(email, note);
});

document.getElementById("registerSubmit").addEventListener("click", function () {
  const email = document.getElementById("register_email").value;
  const note = document.getElementById("register_note").value;
  RegisterRequest(email, note);
});