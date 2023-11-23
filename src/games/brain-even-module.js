import {
  basicFunc2, intro, congrats,
} from '../index.js';

import {
  getRandomInt, 
} from '../utils/get-random.js';

function IsEven(a) {
  let answer = '';
  if (a % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
}

function even() {
  let res = 0;
  let points = 0;
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  intro(description);
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.abs(getRandomInt());
    const question = `${firstNum}`;
    res = IsEven(firstNum);
    if (basicFunc2(question, res) !== res) {
      break;
    }
    points += 1;
  }
  congrats(points);
}

export default even;