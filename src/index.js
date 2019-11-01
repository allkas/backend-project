import readlineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';
const text = 'Answer "yes" if the number is even, otherwise answer "no".';
const numRandom = (min, max) => Math.floor(Math.random() * (max - min));

const user = () => {
  console.log(welcome);
  console.log(text);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};
export default user;
export const number = numRandom(1, 99);
export const compare = () => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
export const esEven = (num) => {
  const even = compare(num) ? 'yes' : 'no';
};
export const evenOrNot = () => {
  readlineSync.question('Your answer: ');
};
