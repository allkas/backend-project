import game from '..';

export default () => {
  const text = 'Answer "yes" if number even otherwise answer "no".';

  const getDataGame = () => {
    const expression = Math.floor(Math.random() * Math.floor(99));
    const correctAnswer = (expression % 2) === 0 ? 'yes' : 'no';
    return [expression, correctAnswer];
  };

  game(text, getDataGame);
};
