import readlineSync from 'readline-sync';

function getGreeting() {
  const welcome = console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const hi = console.log(`Hello, ${name}!`);
  return `${welcome}\n${name}\n${hi}`;
}

export default getGreeting;
