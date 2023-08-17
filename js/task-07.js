const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", updateFontSize);

function updateFontSize() {
  const fontSizeValue = fontSizeControl.value;

  textSpan.style.fontSize = fontSizeValue + "px";
}
