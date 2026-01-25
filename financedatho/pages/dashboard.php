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
<link rel="stylesheet" href="../styles/progressBar.css" />
<link rel="stylesheet" href="../styles/item.css" />

<center>
  <h1>Dashboard</h1>
</center>
<hr>

<div class="dropdown">
  <div onclick="Dropdown(this.parentElement)">
    <i class="fa-solid fa-caret-down"></i>
    <p>Account Information</p>
  </div>
  <div>
    <ul style="padding-left: 20px;">
      <li>
        Logged in as: "
        <?php
        include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/GetLoggedInEmail.php';
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
  </div>
</div>

<div class="dropdown startOpen">
  <div onclick="Dropdown(this.parentElement)">
    <i class="fa-solid fa-caret-down"></i>
    <p>Wishlist</p>
  </div>
  <div>
    <ul id="wishlistItems" style="padding-left: 20px;"></ul>
  </div>
</div>

<div class="dropdown">
  <div onclick="Dropdown(this.parentElement)">
    <i class="fa-solid fa-caret-down"></i>
    <p>Add Item</p>
  </div>
  <div>
    <form id="addItemForm" class="neatForm">
      <input type="text" id="add_name" name="add_name" placeholder="Name" required />
      <input type="text" id="add_link" name="add_link" placeholder="Link" required />
      <input type="number" id="add_price" name="add_price" placeholder="Price (USD)" required />
      <button type="button" id="addItemButton">Add Item</button>
    </form>
  </div>
</div>

<div class="dropdown">
  <div onclick="Dropdown(this.parentElement)">
    <i class="fa-solid fa-caret-down"></i>
    <p>Remove Item</p>
  </div>
  <div>
    <form id="removeItemForm" class="neatForm">
      <input type="number" id="remove_id" name="remove_id" placeholder="Item ID to Remove" required />
      <button type="button" id="removeItemButton">Remove Item</button>
    </form>
  </div>
</div>

<div class="dropdown">
  <div onclick="Dropdown(this.parentElement)">
    <i class="fa-solid fa-caret-down"></i>
    <p>Add Funding</p>
  </div>
  <div>
    <form id="addFundingForm" class="neatForm">
      <input type="number" id="add_funding_amount" name="add_funding_amount" placeholder="Amount to Add (USD)" required />
      <button type="button" id="addFundingButton">Add Funding</button>
    </form>
  </div>
</div>

<!-- <div class="dropdown">
  <div onclick="Dropdown(this.parentElement)">
    <i class="fa-solid fa-caret-down"></i>
    <p>Edit Item</p>
  </div>
  <div>
  </div>
</div> -->

<script src="../scripts/Form_AddItem.js"></script>
<script src="../scripts/Form_RemoveItem.js"></script>
<script src="../scripts/MarkBought.js"></script>
<script src="../scripts/Form_AddFunding.js"></script>
<script src="../scripts/Dropdown.js"></script>
<script src="../scripts/RenderItems.js"></script>