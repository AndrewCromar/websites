function AddFunding(amount) {
  $.ajax({
    url: "../backend-old/AddFunding.php",
    type: "POST",
    data: {
      amount: amount,
    },
    dataType: "json", // tell jQuery to parse JSON automatically
    success: function (response) {
      console.log(response); // for debugging

      if (response.status === "ok") {
        // reload page on success
        document.location.reload();
      } else {
        alert("Failed to add funding: " + response.message);
      }
    },
    error: function (xhr, status, error) {
      console.error("AJAX error:", status, error, xhr.responseText);
      alert("Failed to add funding due to a server error.");
    },
  });
}

document
  .getElementById("addFundingForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const amount = document.getElementById("add_funding_amount").value;
    AddFunding(amount);
  });

document
  .getElementById("addFundingButton")
  .addEventListener("click", function () {
    const amount = document.getElementById("add_funding_amount").value;
    AddFunding(amount);
  });
