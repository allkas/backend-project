import game, { numberRandom } from '..';

export default () => {
  const text = 'Find the greatest common divisor of given numbers.';

  const getDataGame = () => {
    const randomNum1 = numberRandom(5, 20);
    const randomNum2 = numberRandom(5, 20);
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
