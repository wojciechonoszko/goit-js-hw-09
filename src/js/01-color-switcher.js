const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
let timerId = null;

console.log(startButton);

stopButton.disabled = true;

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  timerId = setInterval(() =>{
    function getRandomHexColor() {
              return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            };
          console.log(getRandomHexColor());
          document.body.style.background = getRandomHexColor();
  }, 1000);
});


stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  stopButton.disabled = true;
  startButton.disabled = false;
})











