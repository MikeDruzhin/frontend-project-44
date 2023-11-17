import readlineSync from 'readline-sync';
import { greeting, name } from '../src/cli.js';

function getRandomInt() {
    return Math.floor(Math.random() * (100 - 1)) + 1;
}

function intro(description) {
    greeting();
    console.log(description);
}

function basicFunc2(question, answer) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === answer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}'  is wrong answer ;(. Correct answer was '${answer}'`);
    }
    return Number(userAnswer);
}

function congrats(num) {
    if (num === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}

export { getRandomInt, intro, basicFunc2, congrats};