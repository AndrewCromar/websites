$(document).ready(function() {
    $('#hashPasswordForm').submit(function(event) {
        event.preventDefault();

        var password = $('#hashPassword_password').val();

        $.ajax({
            url: '../backend/HashPassword.php',
            type: 'POST',
            data: {
                action: 'HashPassword',
                password: password
            },
            success: function(response) {
                $('#hashPassword_output').show();
                $('#hashPassword_output').html(response);
            },
            error: function(xhr, status, error) {
                $('#hashPassword_output').show();
                $('#hashPassword_output').html('<p>An error occurred: ' + error + '</p>');
            }
        });
    });
});
