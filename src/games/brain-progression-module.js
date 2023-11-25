import doGameScript from '../index.js';

import {
  getRandomInt, getRandomRange,
} from '../utils/get-random.js';

const generateNumberSequence = (firstNumber, difference, range) => {
  let number = firstNumber;
  const arrayOfNumbers = [number];
  for (let i = 0; i < range - 1; i += 1) {
    number += difference;
    arrayOfNumbers.push(number);
  }
  return arrayOfNumbers;
};

const generateData = () => {
  const num = Math.abs(getRandomInt());
  const relation = Math.abs(getRandomInt());
  const minRange = 5;
  const maxRange = 10;
  const range = getRandomRange(minRange, maxRange);
  const indexOfEmpty = getRandomRange(0, range);
  const arr = generateNumberSequence(num, relation, range, indexOfEmpty);
  const res = arr[indexOfEmpty].toString();
  arr[indexOfEmpty] = '..';
  const sequenceInQuestion = arr.join(' ');
  return [`${sequenceInQuestion}`, res];
};

const enterMissingNumber = () => {
  const description = 'What number is missing in the progression?';
  doGameScript(generateData, description);
};

export default enterMissingNumber;
