import readlineSync from 'readline-sync';


export const user = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};