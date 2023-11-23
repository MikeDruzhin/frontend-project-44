import {
  basicFunc2, intro, congrats,
} from '../index.js';

import {
  getRandomInt, arrayRandElement, 
} from '../utils/get-random.js';

function doCalc(first, second, sign) {
  let res = 0;
  if (sign === '+') {
    res = first + second;
  } else if (sign === '-') {
    res = first - second;
  } else {
    res = first * second;
  }
  return res;
}

function calc() {
  const operations = ['+', '-', '*'];
  let res = 0;
  let points = 0;
  const description = 'What is the result of the expression?';

  intro(description);

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomInt();
    const secondNum = getRandomInt();
    const operator = arrayRandElement(operations);
    const question = `${firstNum}${operator}${secondNum}`;
    res = doCalc(firstNum, secondNum, operator).toString();
    if (basicFunc2(question, res) !== res) {
      break;
    }
    points += 1;
  }
  congrats(points);
}

export default calc;

