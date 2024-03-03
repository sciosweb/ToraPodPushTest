const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('첫 번째 숫자를 입력하세요: ', (num1) => {
  readline.question('두 번째 숫자를 입력하세요: ', (num2) => {
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} + ${num2} = ${sum}`);
    readline.close();
  });
});
