import doGameScript from '../index.js';

import {
  getRandomInt,
} from '../utils/get-random.js';

function divider(a) {
  let res = 0;
  let answer = '';
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) {
      res += 1;
    }
  }
  if (res < 3 && res > 1) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
}

function generateData() {
  const firstNum = Math.abs(getRandomInt());
  const question = `${firstNum}`;
  const res = divider(firstNum);
  return [question, res];
}

function isPrime() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  doGameScript(generateData, description);
}

export default isPrime;
