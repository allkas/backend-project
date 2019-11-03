import readlineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';
export const numRandom = (min, max) => Math.floor(Math.random() * (max - min));

const user = () => {
  console.log(welcome);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};
export default user;
