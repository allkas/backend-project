import readlineSync from 'readline-sync';

const numberOfWin = 3;

export default (text, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(text);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const getGame = (step) => {
    if (step > numberOfWin) return true;
    const [question, correctAnswer] = getDataGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    return getGame(step + 1);
  };

  if (getGame(1)) console.log(`Congratulations, ${name}!`);
};
