let timer;
let timerInterval;
let isBreakTime = false;
let cycleCount = 0;
let totalCycles;

function initializeTimer() {
    timer = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const timeString = `${padTime(minutes)}:${padTime(seconds)}`;
    document.querySelector(".focus_timer").textContent = timeString;
}

function padTime(time) {
    return time < 10 ? '0' + time : time;
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            alert(isBreakTime ? "Time's up! Start focus time!" : "Time's up! Take a break!");
            switchTimer();
        }
    }, 1000);
}

function switchTimer() {
    if (cycleCount < totalCycles) {
        isBreakTime = !isBreakTime;
        timer = isBreakTime ? breakLength : focusLength;
        updateTimerDisplay();
        setTimeout(() => {
            startTimer();
        }, 500);
        cycleCount++;
    } else {
        alert("All done, good work!");
    }
}

function focus_startButton() {
    const focusLength = document.querySelector('.focus_fl_input').value * 60;
    const breakLength = document.querySelector('.focus_bl_input').value * 60;
    totalCycles = document.querySelector('.focus_rt_input').value;
    cycleCount = 0;
    timer = focusLength;
    startTimer();
    document.getElementById("pauseButton").style.display = "inline-block";
    document.getElementById("resumeButton").style.display = "none";
}

function focus_pauseButton() {
    clearInterval(timerInterval);
    document.getElementById("pauseButton").style.display = "none";
    document.getElementById("resumeButton").style.display = "inline-block";
}

function focus_resumeButton() {
    startTimer();
    document.getElementById("pauseButton").style.display = "inline-block";
    document.getElementById("resumeButton").style.display = "none";
}

function focus_endButton() {
    clearInterval(timerInterval);
    timer = 0;
    updateTimerDisplay();
    document.getElementById("pauseButton").style.display = "none";
    document.getElementById("resumeButton").style.display = "none";
}

initializeTimer();