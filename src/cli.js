import readlineSync from 'readline-sync';

const welcome = console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
const hi = console.log(`Hello, ${name}!`);

function getGreeting() {
  return `${welcome}\n${name}\n${hi}`;
}

export {
  getGreeting, welcome, name, hi,
};
