document.addEventListener("mousemove", function (e) {
  const cursor = document.getElementById("dotcursor");
  if (cursor != null) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.style.visibility = "visible";
  }
});