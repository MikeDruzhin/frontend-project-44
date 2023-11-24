import doGameScript from '../index.js';

import {
  getRandomInt, arrayRandElement,
} from '../utils/get-random.js';

function calc(first, second, sign) {
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

function generateData() {
  const operations = ['+', '-', '*'];
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const operator = arrayRandElement(operations);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const res = calc(firstNum, secondNum, operator).toString();
  return [question, res];
}

function doCalc() {
  const description = 'What is the result of the expression?';
  doGameScript(generateData, description);
}

export default doCalc;
