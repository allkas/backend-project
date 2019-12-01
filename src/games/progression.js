import game from '..';
import numberRandom from '../utils';

export default () => {
  const text = 'What number is missing in the progression?';

  const getDataGame = () => {
    const startNum = numberRandom(1, 17);
    const step = numberRandom(2, 5);
    const arrayProgression = [];
    const numberQuestion = numberRandom(1, 10);
    const getProgression = (num1, num2) => {
      for (let i = 0; i <= 9; i += 1) {
        arrayProgression.push(num1 + num2 * i);
      }
      return arrayProgression;
    };
    getProgression(startNum, step);
    const correctAnswer = String(arrayProgression[numberQuestion]);
    arrayProgression[numberQuestion] = '..';
    const question = arrayProgression.join(' ');
    return [question, correctAnswer];
  };

  game(text, getDataGame);
};
