import {
  basicFunc2, intro, congrats,
} from '../index.js';

import {
  getRandomInt 
} from '../utils/get-random.js';

function divider(a) {
  let res = 0;
  let answer = '';
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) {
      res += 1;
    }
  }
  if (res < 3) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
}

function prime() {
  let res = 0;
  let points = 0;
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  intro(description);
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.abs(getRandomInt());
    const question = `${firstNum}`;
    res = divider(firstNum);
    if (basicFunc2(question, res) !== res) {
      break;
    }
    points += 1;
  }
  congrats(points);
}

export default prime;