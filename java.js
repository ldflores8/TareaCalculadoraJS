// En este archivo se configuró la lógica del funcionamiento de la calculadora. Se define 
// lo que es la agregación de números, se seleccionan operaciones, se realiza el cálculo 
// y se limpia la calculadora.

// Estas variables guardan los números ingresados y la operación seleccionada.
let primer_numero = null;
let segundo_numero = null;
let operacion = null;

// Obtiene elementos del HTML para mostrar los valores ingresados y la operación activa.
const display = document.getElementById('display');
const operationDisplay = document.getElementById('operationDisplay');

// Agrega número al display
function appendNumber(number) {
  display.value += number;
}

// Define la operación a realizar
function chooseOperation(operation) {
  if (display.value === '') return;

  primer_numero = parseFloat(display.value);
  operacion = operation;
  display.value = '';
  operationDisplay.textContent = `Operación: ${operation}`;
}

// Calcula el resultado
function calculate() {
  if (operacion === null || display.value === '') return;

  segundo_numero = parseFloat(display.value);
  let result;

  switch (operacion) {
    case '+':
      result = primer_numero + segundo_numero;
      break;
    case '-':
      result = primer_numero - segundo_numero;
      break;
    case '*':
      result = primer_numero * segundo_numero;
      break;
    case '/':
      if (segundo_numero === 0) {
        alert("Error: División por cero");
        clearCalculator();
        return;
      }
      result = primer_numero / segundo_numero;
      break;
    default:
      return;
  }

  // Mostrar solo 2 decimales
  display.value = result.toFixed(2);
  operationDisplay.textContent = '';
  primer_numero = null;
  segundo_numero = null;
  operacion = null;
}

// Limpia toda la calculadora
function clearCalculator() {
  display.value = '';
  operationDisplay.textContent = '';
  primer_numero = null;
  segundo_numero = null;
  operacion = null;
}