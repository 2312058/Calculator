
import { calculate } from './calculator_backend.js';

const display = document.querySelector('.display');
let currentInput = '';
let previousInput = '';
let operator = '';

function updateDisplay(value) {
  display.textContent = value;
}

function handleNumber(num) {
  currentInput += num;
  updateDisplay(currentInput);
}

function handleOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    currentInput = calculate(previousInput, currentInput, operator).toString();
    updateDisplay(currentInput);
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function handleEquals() {
  if (previousInput === '' || currentInput === '') return;
  const result = calculate(previousInput, currentInput, operator);
  updateDisplay(result);
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}

function handleClear() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('0');
}

function handleDelete() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || '0');
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    if (!value) return;

    if (/\d/.test(value)) handleNumber(value);
    else if (['+', '-', '*', '/'].includes(value)) handleOperator(value);
    else if (value === '=') handleEquals();
    else if (value === 'C') handleClear();
    else if (value === 'DEL') handleDelete();
  });
});