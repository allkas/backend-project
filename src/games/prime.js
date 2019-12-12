import { cons } from '@hexlet/pairs';

import game from '..';
import numberRandom from '../utils';

const textDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getDataGame = () => {
  const question = `${numberRandom(2, 3571)} `;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => game(textDescription, getDataGame);
