const nameInput = document.getElementById("name-input");
const span = document.getElementById("name-output");

nameInput.addEventListener("input", rename);
function rename(event) {
  const newName = event.currentTarget.value;
  span.textContent = newName || "Anonymous";
}
