import readlineSync from 'readline-sync';
import { numRandom } from '..';

const welcome = 'Welcome to the Brain Games!';
const textDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const esEven = () => {
  console.log(welcome);
  console.log(textDescription);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};
export default esEven;


export const number = numRandom(1, 99);

const findOutAnEvenNumber = () => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
export const esven = (num) => {
  const even = compare(num) ? 'yes' : 'no';
  console.log(even);
};
export const evenOrNot = () => {
  readlineSync.question('Your answer: ');
};
