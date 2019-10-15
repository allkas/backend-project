import readlineSync from 'readline-sync';

const user = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
};
export default user;
