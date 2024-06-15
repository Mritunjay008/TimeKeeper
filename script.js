let show_seconds = document.getElementById('seconds');
let start_btn = document.getElementById('start');
let reset_btn = document.getElementById('reset');
let stop_btn = document.getElementById('stop');
let getTime_btn = document.getElementById('getTime');
let clearTime_btn = document.getElementById('clearTime');
let record_div = document.getElementById('record');

let startCount = 0;
let intervalId;

// Function to start the timer
function startTimer() {
    if (!intervalId) { // Prevent multiple intervals
        intervalId = setInterval(() => {
            show_seconds.innerText = `${startCount++}`;
        }, 1000);
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
    startCount = 0;
    show_seconds.innerText = startCount;
}

// Function to get the time on display
function recordDisplay() {
    let para = document.createElement('p');
    para.innerText = `Time : ${startCount}`;
    record_div.appendChild(para);
}

// Function to clear the recorded times
function clearTimer() {
    record_div.innerHTML = '';
}

start_btn.addEventListener('click', startTimer);
reset_btn.addEventListener('click', resetTimer);
stop_btn.addEventListener('click', stopTimer);
getTime_btn.addEventListener('click', recordDisplay);
clearTime_btn.addEventListener('click', clearTimer);