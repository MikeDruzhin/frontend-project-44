import doGameScript from '../index.js';

import {
  getRandomInt,
} from '../utils/get-random.js';

function nod(a, b) {
  let max = 0;
  let res = 0;
  max = a > b ? a : b;
  for (let i = 1; i <= max; i += 1) {
    if (a % i === 0 && b % i === 0) {
      res = i;
    }
  }
  return res;
}

function generateData() {
  const firstNum = Math.abs(getRandomInt());
  const secondNum = Math.abs(getRandomInt());
  const question = `${firstNum} ${secondNum}`;
  const res = nod(firstNum, secondNum).toString();
  return [question, res];
}

function findGcd() {
  const description = 'Find the greatest common divisor of given numbers.';
  doGameScript(generateData, description);
}

export default findGcd;
