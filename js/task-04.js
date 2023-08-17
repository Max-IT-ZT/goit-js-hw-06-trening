const number = document.getElementById("value");
const buttonUp = document.querySelector("[data-action='increment']");
const buttonDown = document.querySelector("[data-action='decrement']");

let counterValue = 0;

function mathOperation(changeValue) {
  counterValue += changeValue;
  number.textContent = counterValue;
}

buttonUp.addEventListener("click", () => mathOperation(1)); // Збільшуємо на 1
buttonDown.addEventListener("click", () => mathOperation(-1)); // Зменшуємо на 1
