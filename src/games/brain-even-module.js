import doGameScript from '../index.js';

import {
  getRandomInt,
} from '../utils/get-random.js';

function IsEvenNumber(a) {
  let answer = '';
  if (a % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
}

function generateData() {
  const firstNum = Math.abs(getRandomInt());
  const question = `${firstNum}`;
  const res = IsEvenNumber(firstNum);
  return [question, res];
}

function isEven() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  doGameScript(generateData, description);
}

export default isEven;
