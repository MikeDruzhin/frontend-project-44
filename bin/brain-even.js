#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, name } from '../src/cli.js';

greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const numbers = [15, 6, 7];
let points = 0;
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Question: ${numbers[i]}!`);
  const answer = readlineSync.question('Your answer: ');
  if (numbers[i] % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
  } else if (numbers[i] % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
    break;
  }
  points += 1;
}
if (points === numbers.length) {
  console.log(`Congratulations, ${name}!`);
}
