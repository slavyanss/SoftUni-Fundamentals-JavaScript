// Basic Syntax, Conditional Statements and Loops - Exercise
// 7. Triangle Of Numbers

function triangleOfNumbers(num) {
  let number = num;

  for (let i = 1; i <= number; i++) {
    console.log(`${i} `.repeat(i));
  }
}

triangleOfNumbers(3);
