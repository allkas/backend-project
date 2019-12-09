import { cons } from '@hexlet/pairs';
import game from '..';
import numberRandom from '../utils';

const textDescription = 'What number is missing in the progression?';
const arrayProgression = [];

const getProgression = (num1, num2) => {
  const progressionLength = 9;
  for (let i = 0; i < progressionLength; i += 1) {
    arrayProgression.push(num1 + num2 * i);
  }
  return arrayProgression;
};

const getDataGame = () => {
  const numberQuestion = numberRandom(1, 9);
  const startNumber = numberRandom(1, 17);
  const step = numberRandom(2, 5);
  getProgression(startNumber, step);
  const correctAnswer = String(arrayProgression[numberQuestion]);
  arrayProgression[numberQuestion] = '..';
  const question = arrayProgression.join(' ');
  return cons(question, correctAnswer);
};

export default () => game(textDescription, getDataGame);
