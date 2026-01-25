function Dropdown(element) {
  if (element.classList.contains("open")) {
    element.classList.remove("open");
    element.style.maxHeight = "25px";
  } else {
    element.classList.add("open");
    element.style.maxHeight = element.scrollHeight + "px";
  }
}