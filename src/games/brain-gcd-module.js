import doGameScript from '../index.js';

import {
  getRandomInt,
} from '../utils/get-random.js';

const findGreatestDivisor = (a, b) => {
  let res = 0;
  const max = a > b ? a : b;
  for (let i = 1; i <= max; i += 1) {
    if (a % i === 0 && b % i === 0) {
      res = i; /* если  не накапливать, то всегда будет возвращаться 1 */
    }
  }
  return res;
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
