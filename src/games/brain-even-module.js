import doGameScript from '../index.js';

import {
  getRandomInt,
} from '../utils/get-random.js';

const isEvenNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateData = () => {
  const firstNum = Math.abs(getRandomInt());
  const res = isEvenNumber(firstNum);
  return [`${firstNum}`, res];
};

const isEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  doGameScript(generateData, description);
};

export default isEven;
