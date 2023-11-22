#!/usr/bin/env node
import {
  getRandomInt, intro, basicFunc2, congrats,
} from '../src/index.js';

function IsEven(a) {
  let answer = '';
  if (a % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
}

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
