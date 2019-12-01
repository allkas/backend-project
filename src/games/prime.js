import game from '..';
import numberRandom from '../utils';

export default () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getDataGame = () => {
    const randomNum = numberRandom(2, 3571);
    const question = `${randomNum} `;
    const isPrime = (num) => {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const correctAnswer = String(isPrime(randomNum));
    return [question, correctAnswer];
  };

  game(text, getDataGame);
};
