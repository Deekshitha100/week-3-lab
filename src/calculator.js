#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports the following arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
 */

const readline = require('readline');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return modulo(num1, num2);
    case '^':
      return power(num1, num2);
    default:
      throw new Error('Invalid operator');
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
};

// CLI interface only runs if executed directly
if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askForInput() {
    rl.question(
      '\nEnter first number (or "exit" to quit): ',
      (firstInput) => {
        if (firstInput.toLowerCase() === 'exit') {
          console.log('Goodbye!');
          rl.close();
          return;
        }

        const num1 = parseFloat(firstInput);
        if (isNaN(num1)) {
          console.log('Invalid input. Please enter a valid number.');
          askForInput();
          return;
        }

        rl.question(
          'Enter operator (+, -, *, /, %, ^): ',
          (operator) => {
            if (!['+', '-', '*', '/', '%', '^'].includes(operator)) {
              console.log(
                'Invalid operator. Please use +, -, *, /, %, or ^.'
              );
              askForInput();
              return;
            }

            rl.question(
              'Enter second number: ',
              (secondInput) => {
                const num2 = parseFloat(secondInput);
                if (isNaN(num2)) {
                  console.log('Invalid input. Please enter a valid number.');
                  askForInput();
                  return;
                }

                try {
                  const result = calculate(num1, operator, num2);
                  console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}`);
                } catch (error) {
                  console.log(`\nError: ${error.message}`);
                }
                askForInput();
              }
            );
          }
        );
      }
    );
  }

  console.log('Welcome to the Node.js CLI Calculator!');
  console.log('Supported operations: Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulo (%), Exponentiation (^)');
  console.log('For square root, use the power function with 0.5 as exponent (e.g., 16 ^ 0.5 = 4)');
  askForInput();
}
