$.ajax({
    url: '../backend/IsUserLoggedIn.php', // Path to your PHP script
    type: 'GET', // Method of request
    dataType: 'json', // Expecting JSON data from the server
    success: function(response) {
        if (response) {
            console.log('User is logged in');
            // Handle the case where the user is logged in
        } else {
            console.log('User is not logged in');
            // Handle the case where the user is not logged in
        }
    },
    error: function(xhr, status, error) {
        console.error('AJAX request failed:', error);
        console.error('Response text:', xhr.responseText); // Log the response text for debugging
    }
});