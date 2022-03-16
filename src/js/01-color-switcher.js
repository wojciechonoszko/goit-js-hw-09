const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
let timerId = null;

console.log(startButton);

const onClick = () => {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      };
    console.log(getRandomHexColor());
    document.body.style.background = getRandomHexColor();
}

startButton.addEventListener("click", onClick);












