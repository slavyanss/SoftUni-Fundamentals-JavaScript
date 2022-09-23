// More Exercises: Basic Syntax, Conditional Statements, and Loops
// 1. Sort Numbers

function sortNumbers(a, b, c) {
  let n1 = Number(a);
  let n2 = Number(b);
  let n3 = Number(c);

  if (n1 > n2 && n1 > n3) {
    console.log(n1);
    if (n2 > n3) {
      console.log(n2);
      console.log(n3);
    } else {
      console.log(n3);
      console.log(n2);
    }
  }

  if (n2 > n1 && n2 > n3) {
    console.log(n2);
    if (n1 > n3) {
      console.log(n1);
      console.log(n3);
    } else {
      console.log(n3);
      console.log(n1);
    }
  }

  if (n3 > n1 && n3 > n2) {
    console.log(n3);
    if (n1 > n2) {
      console.log(n1);
      console.log(n2);
    } else {
      console.log(n2);
      console.log(n1);
    }
  }
}

sortNumbers(0, 0, 2);
