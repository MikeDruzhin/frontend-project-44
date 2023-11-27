import doGameScript from '../index.js';

import {
  getRandomInt,
} from '../utils/get-random.js';

// eslint-disable-next-line consistent-return
const findGreatestDivisor = (a, b) => {
  const max = a > b ? a : b;
  for (let i = max; i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};

const generateData = () => {
  const firstNum = Math.abs(getRandomInt());
  const secondNum = Math.abs(getRandomInt());
  const question = `${firstNum} ${secondNum}`;
  const res = findGreatestDivisor(firstNum, secondNum).toString();
  return [question, res];
};

const findGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  doGameScript(generateData, description);
};

export default findGcd;
