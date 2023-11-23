import {
  basicFunc2, intro, congrats,
} from '../index.js';

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

function gcd() {
  let res = 0;
  let points = 0;
  const description = 'Find the greatest common divisor of given numbers.';

  intro(description);
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.abs(getRandomInt());
    const secondNum = Math.abs(getRandomInt());
    const question = `${firstNum} ${secondNum}`;
    res = nod(firstNum, secondNum).toString();
    if (basicFunc2(question, res) !== res) {
      break;
    }
    points += 1;
  }
  congrats(points);
}

export default gcd;
