// Basic Syntax, Conditional Statements and Loops - Exercise
// 1. Ages

function ages(n) {
  if (n >= 0 && n <= 2) {
    console.log(`baby`);
  } else if (n >= 3 && n <= 13) {
    console.log(`child`);
  } else if (n >= 14 && n <= 19) {
    console.log(`teenager`);
  } else if (n >= 20 && n <= 65) {
    console.log(`adult`);
  } else if (n >= 66) {
    console.log(`elder`);
  } else {
    console.log(`out of bounds`);
  }
 
  let arr = [1, 2]
  console.log(arr[4]);
  
}

ages(20);
