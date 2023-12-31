import doGameScript from '../index.js';

import {
  getRandomInt, arrayRandElement,
} from '../utils/get-random.js';

const calculateValues = (firstValue, secondValue, sign) => {
  switch (sign) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

const generateData = () => {
  const operations = ['+', '-', '*'];
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const operator = arrayRandElement(operations);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const res = calculateValues(firstNum, secondNum, operator).toString();
  return [question, res];
};

const doCalc = () => {
  const description = 'What is the result of the expression?';
  doGameScript(generateData, description);
};

export default doCalc;
