let startTime, updatedTime, difference, timerInterval;
let running = false;

function updateDisplay(time) {
  const milliseconds = ("00" + (time % 1000)).slice(-3);
  const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
  const minutes = ("0" + (Math.floor(time / 60000))).slice(-2);
  document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function start() {
  if (!running) {
    running = true;
    startTime = Date.now() - (difference || 0);
    timerInterval = setInterval(() => {
      updatedTime = Date.now();
      difference = updatedTime - startTime;
      updateDisplay(difference);
    }, 10);
  }
}

function pause() {
  running = false;
  clearInterval(timerInterval);
}

function reset() {
  running = false;
  clearInterval(timerInterval);
  difference = 0;
  updateDisplay(0);
}
