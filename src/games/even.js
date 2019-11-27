import game, { numberRandom } from '..';

export default () => {
  const text = 'Answer "yes" if number even otherwise answer "no".';

  const getDataGame = () => {
    const expression = numberRandom(2, 99);
    const correctAnswer = (expression % 2) === 0 ? 'yes' : 'no';
    return [expression, correctAnswer];
  };

  game(text, getDataGame);
};
