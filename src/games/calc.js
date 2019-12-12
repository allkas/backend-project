import { cons } from '@hexlet/pairs';
import game from '..';
import numberRandom from '../utils';

const textDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const operand1 = numberRandom(2, 10);
const operand2 = numberRandom(2, 10);

const getResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default: return null;
  }
};

const getDataGame = () => {
  const randomOperator = numberRandom(1, operations.length - 1);
  const question = `${operand1} ${operations[randomOperator]} ${operand2}`;
  const correctAnswer = String(getResult(operand1, operand2, operations[randomOperator]));
  return cons(question, correctAnswer);
};

export default () => game(textDescription, getDataGame);
