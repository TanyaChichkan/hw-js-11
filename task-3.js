const refs = {
  days: document.querySelector("[data-value=days]"),
  hours: document.querySelector("[data-value=hours]"),
  minutes: document.querySelector("[data-value=mins]"),
  seconds: document.querySelector("[data-value=secs]"),
  timer: document.querySelector("#timer-1"),
};

const timer = {
  start() {
    const startTime = new Date("Sep 15, 2021");

    setInterval(() => {
      const currentTime = Date.now();

      const deltaTime = startTime - currentTime;

      updateClockface(deltaTime);
    }, 1000);
  },

  stop() {},
};

timer.start();

function updateClockface(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${mins}`;
  refs.seconds.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
