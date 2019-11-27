import game from '..';

export default () => {
  const text = 'What number is missing in the progression?';

  const numberRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const getDataGame = () => {
    const startNum = numberRandom(1, 17);
    const step = numberRandom(2, 5);
    const arrProg = [];
    const numQuest = numberRandom(1, 10);
    const getProgression = (num1, num2) => {
      for (let i = 0; i <= 9; i += 1) {
        arrProg.push(num1 + num2 * i);
      }
      return arrProg;
    };
    getProgression(startNum, step);
    const correctAnswer = String(arrProg[numQuest]);
    arrProg[numQuest] = '..';
    const expression = arrProg.join(' ');
    return [expression, correctAnswer];
  };

  game(text, getDataGame);
};
