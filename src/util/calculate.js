export const calculate = (num1, num2, operator) => {
  if (num1 === '') num1 = 0;
  if (num2 === '') num2 = 0;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch (operator) {
    case 'multiplication':
      return multiply(num1, num2);
    case 'division':
      if (num1 === 0 && num2 === 0) {
        return { result: 'Error' };
      }
      return divide(num1, num2);
    case 'addition':
      return add(num1, num2);
    case 'subtraction':
      return subtract(num1, num2);
  }
};

const multiply = (num1, num2) => ({ result: num1 * num2 });
const divide = (num1, num2) => ({ result: num1 / num2 });
const add = (num1, num2) => ({ result: num1 + num2 });
const subtract = (num1, num2) => ({ result: num1 - num2 });
