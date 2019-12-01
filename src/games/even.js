import game from '..';
import numberRandom from '../utils';

export default () => {
  const text = 'Answer "yes" if number even otherwise answer "no".';

  const getDataGame = () => {
    const question = numberRandom(2, 99);
    const correctAnswer = (question % 2) === 0 ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  game(text, getDataGame);
};
