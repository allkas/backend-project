import { cons } from '@hexlet/pairs';

import game from '..';
import numberRandom from '../utils';

const textDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const getDataGame = () => {
  const number1 = numberRandom(5, 20);
  const number2 = numberRandom(5, 20);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return cons(question, correctAnswer);
};

export default () => game(textDescription, getDataGame);
