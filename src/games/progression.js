import { cons } from '@hexlet/pairs';
import game from '..';
import getRandomValue from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const progressionQuestion = (memberProgression, differenceProgression, lengthProgression, question) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(memberProgression + differenceProgression * i);
  }
  progression.splice(question, 1, '..');
  return progression.join(' ');
};

const getDataGame = () => {
  const hiddenMemberIndex = getRandomValue(1, progressionLength - 1);
  const progressionMember = getRandomValue(1, 17);
  const step = getRandomValue(2, 5);
  const arithmeticProgression = progressionQuestion(
    progressionMember,
    step,
    progressionLength,
    hiddenMemberIndex,
  );
  const question = arithmeticProgression;
  const correctAnswer = (progressionMember + step * hiddenMemberIndex).toString();
  return cons(question, correctAnswer);
};

export default () => game(description, getDataGame);
