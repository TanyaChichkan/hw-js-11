const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnstart: document.querySelector("[data-action=start]"),
  btnstop: document.querySelector("[data-action=stop]"),
  body: document.querySelector("body"),
};
let timerId = null;

refs.btnstart.addEventListener("click", () => {
  timerId = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[index];
    refs.btnstart.setAttribute("disabled", "disabled");
  }, 1000);
});

refs.btnstop.addEventListener("click", () => {
  clearInterval(timerId);
  refs.btnstart.removeAttribute("disabled", "disabled");
});
