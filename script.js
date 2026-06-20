const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Ekspos ke global agar onclick di HTML tetap berfungsi
window.appendValue = appendValue;
window.clearDisplay = clearDisplay;
window.deleteLast = deleteLast;
window.calculate = calculate;
