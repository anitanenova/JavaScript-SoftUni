function stopwatch() {
  const watch = document.getElementById("time");
  const startButtonElement = document.getElementById("startBtn");
  const stopButtonElement = document.getElementById("stopBtn");
  let [seconds, minutes] = [0, 0];
  let timeout;

  startButtonElement.addEventListener("click", timer);
  stopButtonElement.addEventListener("click", clearTimer);

  function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    watch.textContent =
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
  }

  function timer() {
    watch.textContent = "00:00";
    startButtonElement.disabled = true;
    stopButtonElement.disabled = false;
    timeout = setInterval(add, 1000);
  }

  function clearTimer() {
    startButtonElement.disabled = false;
    stopButtonElement.disabled = true;
    clearInterval(timeout);
    seconds = 0;
    minutes = 0;
  }
}
