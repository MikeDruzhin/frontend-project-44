import readlineSync from 'readline-sync';

const roundCount = 3;
function doGameScript(getGameData, description) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}'  is wrong answer ;(. Correct answer was '${answer}'`);
      return `Let's try again, ${name}!`;
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default doGameScript;
