function getInputs() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  return { a, b };
}

function displayResult(result) {
  document.getElementById('result').textContent = `Result: ${result}`;
}

function add() {
  const { a, b } = getInputs();
  displayResult(window.calculator.add(a, b));
}
function subtract() {
  const { a, b } = getInputs();
  displayResult(window.calculator.subtract(a, b));
}

function multiply() {
  const { a, b } = getInputs();
  displayResult(window.calculator.multiply(a, b));
}

function divide() {
  const { a, b } = getInputs();
  displayResult(window.calculator.divide(a, b));
}