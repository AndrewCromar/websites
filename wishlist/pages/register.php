<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />

<link rel="stylesheet" href="../styles/root.css" />
<link rel="stylesheet" href="../styles/main.css" />
<link rel="stylesheet" href="../styles/login.css" />

<center>
    <h1>Register</h1>
</center>
<hr>

<form id="registerForm">
    <label for="register_email">Email</label>
    <input type="text" id="register_email" name="register_email" required />


    <label for="register_note">Why should we let you in? (brief)</label>
    <textarea id="register_note" name="register_note" rows="6" style="width:100%;"></textarea>

    <div style="margin-top:12px; display:flex; gap:10px;">
        <button type="submit" id="registerSubmit">Submit request</button>
        <button type="button" onclick="location.href='login.php'">Back to login</button>
    </div>
</form>

<div id="register_output" class="box" hidden style="margin-top:12px;"></div>

<script src="../scripts/account/RegisterRequest.js"></script>