const random = require('./Random.js')
function rollDice() {
    return Math.ceil(Math.random()*6)
  }
//for(let i = 0; i < 6; i++) console.log(rollDice())
const num1 = rollDice();
const num2 = rollDice();

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
console.log(random.randIntWithZero())