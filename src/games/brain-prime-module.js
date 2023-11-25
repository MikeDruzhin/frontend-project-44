import doGameScript from '../index.js';

import {
  getRandomInt,
} from '../utils/get-random.js';

const isNumberPrime = (number) => {
  let res = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      res += 1;
    }
  }
  return (res < 3 && res > 1) ? 'yes' : 'no';
};

const generateData = () => {
  const firstNum = Math.abs(getRandomInt());
  const question = `${firstNum}`;
  const res = isNumberPrime(firstNum);
  return [question, res];
};

const isPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  doGameScript(generateData, description);
};

export default isPrime;
