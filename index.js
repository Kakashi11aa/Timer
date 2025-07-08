let countdownInterval;
let timeInSeconds = 0;

function addMinutes(min) {
  timeInSeconds += min * 60;
  updateDisplay(); // сразу показываем добавленное время
}

function startTimer() {
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    if (timeInSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Время вышло!");
    } else {
      timeInSeconds--;
      updateDisplay();
    }
  }, 1000);
}

function resetTimer() {
  const isConfirmed = confirm("Вы уверены что хотите сбросить таймер");
  if(isConfirmed) {
    clearInterval(countdownInterval);
    timeInSeconds = 0;
    updateDisplay();
  }
}

function updateDisplay() {
  const mins = Math.floor(timeInSeconds / 60);
  const secs = timeInSeconds % 60;

  document.getElementById("countdown").textContent =
    `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}
