// Basic Syntax, Conditional Statements, and Loops - Lab
// 11. Sum of Odd Numbers

function sumOfOddNums(n) {
  let sum = 0;
  //let count = 0;

  for (let i = 1; i <= n * 2; i += 2) {
    console.log(i);
    sum += i;
  }

  console.log(`Sum: ${sum}`);
}

sumOfOddNums(5);
