import readlineSync from 'readline-sync';

export const welcome = 'Welcome to the Brain Games!';
export const numRandom = Math.floor(Math.random() * 101);

export const user = () => {
  console.log(welcome);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};
