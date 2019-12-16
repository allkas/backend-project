import { cons } from '@hexlet/pairs';
import game from '..';
import getRandomValue from '../utils';

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';

const getDataGame = () => {
  const question = getRandomValue(2, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => game(description, getDataGame);
