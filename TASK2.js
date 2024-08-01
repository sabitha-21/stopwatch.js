let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 0;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const lapBtn = document.getElementById('lapBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const laps = document.getElementById('laps');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startBtn.innerHTML = "Pause";
    } else {
        clearInterval(tInterval);
        running = false;
        startBtn.innerHTML = "Start";
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    timeDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function stopTimer() {
    clearInterval(tInterval);
    running = false;
    startBtn.innerHTML = "Start";
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    startTime = 0;
    updatedTime = 0;
    difference = 0;
    timeDisplay.innerHTML = "00:00:00";
    laps.innerHTML = "";
    startBtn.innerHTML = "Start";
    lapCounter = 0;
}

function lapTimer() {
    if (running) {
        lapCounter++;
        const lapTime = document.createElement("div");
        lapTime.innerHTML = "Lap " + lapCounter + ": " + timeDisplay.innerHTML;
        laps.appendChild(lapTime);
    }
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);

