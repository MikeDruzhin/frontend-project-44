import readlineSync from 'readline-sync';

const welcome = console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
const hi = console.log(`Hello, ${name}!`);

function greeting() {
  return `${welcome}\n${name}\n${hi}`;
}

export {
  greeting, welcome, name, hi,
};
