#!/usr/bin/env node
import { getRandomInt, intro, basicFunc2, congrats } from '../src/index.js';

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
function doCalc(first, second, sign) {
    let res = 0;
    if (sign === '+') {
        res = first + second;
    } else if (sign === '-') {
        res = first - second;
    } else {
        res = first * second;
    }
    return res;
}
const operations = ['+', '-', '*'];
let res = 0;
let points = 0;
const description = 'What is the result of the expression?';

intro(description);
for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomInt();
    const secondNum = getRandomInt();
    const operator = arrayRandElement(operations);
    const question = `${firstNum}${operator}${secondNum}`
    res = doCalc(firstNum, secondNum, operator);
    if (basicFunc2(question, res) !== res) {
        break;
    };
    points += 1;
}
congrats(points);


