const lights = document.querySelectorAll('.light');
const timerDisplay = document.getElementById('timer');

const durations = [100, 30, 60]; // red, yellow, green durations in seconds
let current = 0;
let interval = null;
let countdown = durations[current];

function updateLights(index) {
  lights.forEach(light => light.classList.remove('active'));
  lights[index].classList.add('active');
}

function updateTimer() {
  timerDisplay.textContent = countdown + 's';
  if (countdown <= 0) {
    current = (current + 1) % lights.length;
    countdown = durations[current];
    updateLights(current);
  }
  countdown--;
}

function startSignal() {
  if (interval) return;
  updateLights(current);
  countdown = durations[current];
  timerDisplay.textContent = countdown + 's';
  interval = setInterval(updateTimer, 1000);
}

function stopSignal() {
  clearInterval(interval);
  interval = null;
  lights.forEach(light => light.classList.remove('active'));
  timerDisplay.textContent = 'Stopped';
  current = 0;
}
