import { cons } from '@hexlet/pairs';

import game from '..';
import numberRandom from '../utils';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomNum = numberRandom(2, 3571);

const getDataGame = () => {
  const question = `${randomNum} `;
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const correctAnswer = String(isPrime(randomNum));
  return cons(question, correctAnswer);
};

export default () => game(text, getDataGame);
