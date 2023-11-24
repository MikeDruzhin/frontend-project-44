import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const roundCount = 3;
function doGameScript(getGameData, description) {
  console.log(description);
  let points = 0;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}'  is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    points += 1;
  }
  if (points === roundCount) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default doGameScript;
