// Data Types and Variables - Exercise
// 08. Calculator

function calculator(n1, op, n2) {
  let res = 0;

  if (op === "+") {
    res = n1 + n2;
  } else if (op === "-") {
    res = n1 - n2;
  } else if (op === "/") {
    res = n1 / n2;
  } else {
    res = n1 * n2;
  }

  console.log(`${res.toFixed(2)}`);
}

calculator(5, "+", 10);
