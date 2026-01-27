function random_bg_color() {
    var x = Math.floor(Math.random() * 201);
    var y = Math.floor(Math.random() * 201);
    var z = Math.floor(Math.random() * 201);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
}

random_bg_color();