import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gamesCount = 3;

export default (textDescription, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(textDescription);

  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 1; i <= gamesCount; i += 1) {
    const questionAndAnswer = getDataGame();
    const question = car(questionAndAnswer);
    const trueAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
