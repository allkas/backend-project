import { cons } from '@hexlet/pairs';
import game from '..';
import numberRandom from '../utils';

const textDescription = 'What number is missing in the progression?';

const getDataGame = () => {
  const arrayProgression = [];
  const progressionLength = 9;
  const numberQuestion = numberRandom(1, 9);
  const startNumber = numberRandom(1, 17);
  const step = numberRandom(2, 5);
  const getProgression = (num1, num2) => {
    for (let i = 0; i < progressionLength; i += 1) {
      arrayProgression.push(num1 + num2 * i);
    }
    return arrayProgression;
  };
  getProgression(startNumber, step);
  const correctAnswer = String(arrayProgression[numberQuestion]);
  arrayProgression[numberQuestion] = '..';
  const question = arrayProgression.join(' ');
  return cons(question, correctAnswer);
};

export default () => game(textDescription, getDataGame);
