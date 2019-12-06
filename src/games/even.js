import { cons } from '@hexlet/pairs';

import game from '..';
import numberRandom from '../utils';

const isEven = (num) => num % 2 === 0;
const textDescription = 'Answer "yes" if number even otherwise answer "no".';

const getDataGame = () => {
  const question = numberRandom(2, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => game(textDescription, getDataGame);
