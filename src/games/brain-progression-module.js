import {
  basicFunc2, intro, congrats,
} from '../index.js';

import {
  getRandomInt, getRandomRange,
} from '../utils/get-random.js';

function arrGen(start, diff, range) {
  let num = start;
  const relation = diff;
  const arr = [num];
  for (let i = 0; i < range - 1; i += 1) {
    const temp = num + relation;
    arr.push(temp);
    num = temp;
  }
  return arr;
}

function progression() {
  let res = 0;
  let points = 0;
  const description = 'What number is missing in the progression?';

  intro(description);
  for (let i = 0; i < 3; i += 1) {
    const num = Math.abs(getRandomInt());
    const relation = Math.abs(getRandomInt());
    const range = getRandomRange(5, 10);
    const indexOfEmpty = getRandomRange(0, range);
    const arr = arrGen(num, relation, range, indexOfEmpty);
    res = arr[indexOfEmpty].toString();
    arr[indexOfEmpty] = '..';
    const q = arr.join(' ');
    const question = `${q}`;
    if (basicFunc2(question, res) !== res) {
      break;
    }
    points += 1;
  }
  congrats(points);
}

export default progression;
