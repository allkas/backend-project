import game from '..';
import numberRandom from '../utils';

export default () => {
  const text = 'What is the result of the expression?';

  const getDataGame = () => {
    const operation = ['+', '-', '*'];
    const randomNum1 = numberRandom(2, 25);
    const randomNum2 = numberRandom(2, 15);
    const operNum = numberRandom(1, operation.length);
    const question = `${randomNum1} ${operation[operNum]} ${randomNum2}`;
    const answer = (num1, num2, oper) => {
      switch (oper) {
        case '+':
          return randomNum1 + randomNum2;
        case '-':
          return randomNum1 - randomNum2;
        case '*':
          return randomNum1 * randomNum2;
        default: return null;
      }
    };
    const correctAnswer = String(answer(randomNum1, randomNum2, operation[operNum]));
    return [question, correctAnswer];
  };

  game(text, getDataGame);
};
