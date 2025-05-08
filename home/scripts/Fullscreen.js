function fullscreen_openButton() {
    document.getElementById("fullscreen_box").classList.remove("fullscreen_closed");
    document.getElementById("fullscreen_box").classList.add("fullscreen_opened");

    document.getElementById("fullscreen_allowCenter").classList.add("fullscreen_centercenter");
    
    fullscreen_updateButtons(false, true);
}

function fullscreen_closeButton() {
    document.getElementById("fullscreen_box").classList.remove("fullscreen_opened");
    document.getElementById("fullscreen_box").classList.add("fullscreen_closed");

    document.getElementById("fullscreen_allowCenter").classList.remove("fullscreen_centercenter");

    fullscreen_updateButtons(true, false);
}

function fullscreen_updateButtons(showOpen, showClose) {
    document.getElementById("fullscreen_open").style.display = showOpen ? "" : "none";
    document.getElementById("fullscreen_close").style.display = showClose ? "" : "none";
}
