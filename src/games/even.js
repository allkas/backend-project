import readlineSync from 'readline-sync';
import { welcome, numRandom } from '..';

const textDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const number = numRandom;
const esEven = () => {
  console.log(welcome);
  console.log(textDescription);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  const numberOfAnswersForWin = 3;
  const getGame = (numberStep) => {
    if (numberStep > numberOfAnswersForWin) return true;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const esven = (number % 2) === 0 ? 'yes' : 'no';
    if (answer === esven) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${esven}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    return getGame(numberStep + 1);
  };
  if (getGame(1)) console.log(`Congratulations, ${userName}!`);
};
export default esEven;
