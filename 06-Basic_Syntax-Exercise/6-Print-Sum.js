// Basic Syntax, Conditional Statements and Loops - Exercise
// 6. Print And Sum

function printAndSum(num1, num2) {
  let sum = 0;
  let string1 = "";

  for (let i = num1; i <= num2; i++) {
    string1 += i + " ";
    sum += i;
  }

  console.log(string1);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
