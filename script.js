const hourEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const msecondsEl = document.querySelector(".mseconds");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

//design the timer
//variables
let mseconds = 00;
let seconds = 00;
let minutes = 00;
let hours = 00;

//function that  controls the timing
function timer() {
  mseconds++;
  if (mseconds < 10) {
    mseconds = "0" + mseconds;
    msecondsEl.innerHTML = mseconds;
  }
  if (mseconds >= 10 && mseconds < 100) {
    msecondsEl.innerHTML = mseconds;
  }
  if (mseconds === 100) {
    seconds++;
    mseconds = 00;
    secondsEl.innerHTML = seconds;
  }
  if (seconds < 10) {
    secondsEl.innerHTML = `0${seconds}`;
  }
  if (seconds >= 10 && seconds < 60) {
    secondsEl.innerHTML = seconds;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 00;
    minutesEl.innerHTML = minutes;
  }
  if (minutes < 10) {
    minutesEl.innerHTML = `0${minutes}`;
  }
  if (minutes >= 10 && seconds < 60) {
    minutesEl.innerHTML = minutes;
  }
  if (minutes === 60) {
    hours++;
    minutes = 00;
    hourEl.innerHTML = hours;
  }
  if (hours < 10) {
    hourEl.innerHTML = `0${hours}`;
  }
}

startBtn.addEventListener("click", () => {
  interval = setInterval(timer);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  seconds = "00";
  mseconds = "00";
  minutes = "00";
  hours = "00";
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  msecondsEl.innerHTML = mseconds;
  hourEl.innerHTML = hours;
});
