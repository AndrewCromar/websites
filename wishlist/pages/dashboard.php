<?php
session_start();

if (!isset($_SESSION['uid'])) {
  header("Location: login.php");
  exit;
}
?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />

<link rel="stylesheet" href="../styles/root.css" />
<link rel="stylesheet" href="../styles/main.css" />
<link rel="stylesheet" href="../styles/dropdown.css" />
<link rel="stylesheet" href="../styles/neatForm.css" />
<link rel="stylesheet" href="../styles/wishlist.css" />

<center>
  <h1>Dashboard</h1>
</center>
<hr>

<div class="dropdown">
  <div onclick="ToggleDropdown(this.parentElement)">
    <i class="fa-solid fa-caret-down"></i>
    <p>Account Information</p>
  </div>
  <div>
    <ul style="padding-left: 20px;">
      <li>
        Email: "
        <?php
        include_once __DIR__ . '/../backend/api/GetLoggedInEmail.php';
        echo GetLoggedInEmail();
        ?>
        ".
      </li>
      <li>
        UID: "
        <?php
        echo $_SESSION['uid'];
        ?>
        ".
      </li>
    </ul>
    <button onclick="Logout();">Logout</button>
  </div>
</div>

<div class="dropdown open">
  <div onclick="ToggleDropdown(this.parentElement)">
    <i class="fa-solid fa-caret-down"></i>
    <p>Wishlist</p>
  </div>
  <div class="wishlist-container">
    <div>
      <p>
        -
        <span><a href="test">Name Goes Here</a></span>&nbsp;
        <span>$000.00 / $000.00 (00%)</span>&nbsp;
        <span>#000</span></p>
        <div><div></div></div>
    </div>
    <div>
      <p>
        -
        <span><a href="test">Name Goes Here</a></span>&nbsp;
        <span>$000.00 / $000.00 (00%)</span>&nbsp;
        <span>#000</span></p>
        <div><div></div></div>
    </div>
    <div>
      <p>
        -
        <span><a href="test">Name Goes Here</a></span>&nbsp;
        <span>$000.00 / $000.00 (00%)</span>&nbsp;
        <span>#000</span></p>
        <div><div></div></div>
    </div>
    <div>
      <p>
        -
        <span><a href="test">Name Goes Here</a></span>&nbsp;
        <span>$000.00 / $000.00 (00%)</span>&nbsp;
        <span>#000</span></p>
        <div><div></div></div>
    </div>
    <div>
      <p>
        -
        <span><a href="test">Name Goes Here</a></span>&nbsp;
        <span>$000.00 / $000.00 (00%)</span>&nbsp;
        <span>#000</span></p>
        <div><div></div></div>
    </div>
  </div>
</div>

<script src="../scripts/Dropdown.js"></script>
<script src="../scripts/Logout.js"></script>