import { cons } from '@hexlet/pairs';
import game from '..';
import getRandomValue from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (num1, num2, lengthProgression, question) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(num1 + num2 * i);
  }
  progression.splice(question, 1, '..');
  return progression.join(' ');
};

const getDataGame = () => {
  const numberQuestion = getRandomValue(1, progressionLength);
  const progressionMember = getRandomValue(1, 17);
  const step = getRandomValue(2, 5);
  const arithmeticProgression = getProgression(
    progressionMember,
    step,
    progressionLength,
    numberQuestion,
  );
  const question = arithmeticProgression;
  const correctAnswer = `${progressionMember + step * numberQuestion}`;
  return cons(question, correctAnswer);
};

export default () => game(description, getDataGame);
