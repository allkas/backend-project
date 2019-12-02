import { cons } from '@hexlet/pairs';

import game from '..';
import numberRandom from '../utils';

const even = (num) => num % 2 === 0;
const text = 'Answer "yes" if number even otherwise answer "no".';

const getDataGame = () => {
  const question = numberRandom(2, 99);
  const correctAnswer = even(question) === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => game(text, getDataGame);
