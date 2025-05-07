// display the timer in format: 00:00 to .focus_timer (as the text)
// at the end of a timer use showModal({message}, modalClosedFunction) to show a popup

// how does it work

// when i press start get the focus length, break length, and repeat times from number inputs wwith classes
// focus_fl_input, focus_bl_input, and focus_rt_input respectivly

// start the clock ticking down with teh focus length

// when the clock reaches zero show a modal that says "Times up! Time to take a break!"

// when the modal is closed start another timer this time with the break length

// when the clock reaches zero show a modal that says "Times up! Time focus!"

// when this modal is closed check how many times we have done this
// if it is less than the reapeat times: go again for another focus and break
// if it is greater than repeat times: show a modal "All done! Good job focusing!"

function focus_pauseButton() {
    updateButtons(false, true);
}

function focus_resumeButton() {
    updateButtons(true, false);
}

function focus_endButton() {
    updateButtons(false, false);
}

function updateButtons(pause, resume){
    document.getElementById("pauseButton").style.display = pause == true ? "inline-block" : "none";
    document.getElementById("resumeButton").style.display = resume == true ? "inline-block" : "none";
}