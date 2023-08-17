const userInput = document.getElementById("validation-input");

userInput.addEventListener("input", checkInputLength);
// function checkInputLength() {
//   const desiredLength = parseInt(userInput.getAttribute("data-length"), 10);
//   const inputLength = userInput.value.length;
//   if (inputLength === desiredLength) {
//     userInput.classList.add("valid");
//     userInput.classList.remove("invalid");
//   } else {
//     userInput.classList.add("invalid");
//   }
// }
function checkInputLength() {
  const desiredLength = parseInt(userInput.getAttribute("data-length"), 10);
  const inputLength = userInput.value.length;

  userInput.classList.toggle("valid", inputLength === desiredLength);
  userInput.classList.toggle(
    "invalid",
    inputLength >= 1 && inputLength !== desiredLength
  );
}
