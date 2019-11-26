import game from '..';

export default () => {
  const text = 'What is the result of the expression?';

  const getDataGame = () => {
    const operation = ['+', '-', '*'];
    const randomNum1 = Math.floor(Math.random() * Math.floor(25));
    const randomNum2 = Math.floor(Math.random() * Math.floor(15));
    const operNum = Math.floor(Math.random() * 3);
    const expression = `${randomNum1} ${operation[operNum]} ${randomNum2}`;
    const answer = (num1, num2, oper) => {
      if (String(oper) === '+') {
        return (randomNum1 + randomNum2);
      }
      if (String(oper) === '-') {
        return (randomNum1 - randomNum2);
      }
      if (String(oper) === '*') {
        return (randomNum1 * randomNum2);
      }
    };
    const correctAnswer = String(answer(randomNum1, randomNum2, operation[operNum]));
    return [expression, correctAnswer];
  };

  game(text, getDataGame);
};
