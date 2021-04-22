const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter username ', (answer) => {
  // TODO: Log the answer in a database
  console.log(` ${answer},How are you?`);

  rl.close();
});