reducedMotionOnLoad();

function reducedMotionOnLoad(){
    var reduced_motion = localStorage.getItem("reduced_motion");

    var toggle_switch = document.querySelector('.rm-toggle');
    if(reduced_motion == "true"){ toggle_switch.checked = true; }
}

function toggleReducedMotion() {
    var toggle_switch = document.querySelector('.rm-toggle');

    if (toggle_switch.checked) {
        localStorage.setItem("reduced_motion", "true");
    } else {
        localStorage.setItem("reduced_motion", "false");
    }
}

document.querySelector('.rm-toggle').addEventListener('change', toggleReducedMotion);