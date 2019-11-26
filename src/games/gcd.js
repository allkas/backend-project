import game from '..';

export default () => {
  const text = 'Find the greatest common divisor of given numbers.';

  const getDataGame = () => {
    const randomNum1 = Math.floor(Math.random() * Math.floor(50));
    const randomNum2 = Math.floor(Math.random() * Math.floor(50));
    const expression = `${randomNum1} ${randomNum2}`;
    const gcd = (num1, num2) => {
      if (num2 === 0) {
        return num1;
      }
      return gcd(num2, num1 % num2);
    };
    const correctAnswer = String(gcd(randomNum1, randomNum2));
    return [expression, correctAnswer];
  };

  game(text, getDataGame);
};
