const breakMessage = "Time for a break!";
const focusMessage = "Time to focus!";

const ClockState = {
    Off: 2,
    Focus: 0,
    Break: 1
};
var state = ClockState.Off;

const tickerInterval = 1000;
var ticker = null;

var focusLength = 10;
var breakLength = 5;

var currentTick = 0;
var ticksLeft = 0;

const clockObjectClass = ".focus_timer";

function clockTick() {
    console.log(`Tick: ${currentTick}, State: ${state}, Focus Length: ${focusLength}, Break Length: ${breakLength}`);

    currentTick ++;
    if(state === ClockState.Focus) ticksLeft = focusLength * 60 - currentTick;
    if(state === ClockState.Break) ticksLeft = breakLength * 60 - currentTick;

    if((state === ClockState.Focus && currentTick >= focusLength * 60)
    || (state === ClockState.Break && currentTick >= breakLength * 60))
        setupNextClock();

    updateClockUI();
}

function updateClockUI() {
    let minutes = Math.floor(ticksLeft / 60);
    let seconds = ticksLeft % 60;

    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    document.querySelector(clockObjectClass).innerHTML = `${minutes}:${seconds}`;
}

function startClock() {
    if (!ticker) ticker = setInterval(clockTick, tickerInterval);
}

function stopClock() {
    clearInterval(ticker);
    ticker = null;
}

function setupNextClock() {
    currentTick = 0;
    state = state === ClockState.Focus ? ClockState.Break : ClockState.Focus;

    stopClock();
    showModal(state === ClockState.Focus ? focusMessage : breakMessage, () => startClock());
}

function focus_startButton() {
    updateButtons(false, true, false, true);

    focusLength = document.querySelector(".focus_fl_input").value;
    breakLength = document.querySelector(".focus_bl_input").value;

    currentTick = 0;

    state = ClockState.Focus;

    startClock();
}

function focus_pauseButton() {
    updateButtons(false, false, true, true);

    stopClock();
}

function focus_resumeButton() {
    updateButtons(false, true, false, true);

    startClock();
}

function focus_endButton() {
    updateButtons(true, false, false, false);

    stopClock();
    document.querySelector(clockObjectClass).innerHTML = "00:00";
}

function updateButtons(start, pause, resume, end){
    document.getElementById("startButton").style.display  = start  == true ? "inline-block" : "none";
    document.getElementById("pauseButton").style.display  = pause  == true ? "inline-block" : "none";
    document.getElementById("resumeButton").style.display = resume == true ? "inline-block" : "none";
    document.getElementById("endButton").style.display    = end    == true ? "inline-block" : "none";
}