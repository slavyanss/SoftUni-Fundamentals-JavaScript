//Data Types and Variables - More Exercises
//02. Prime Number Checker

function primeNumberChecker(num) {
  let isPrimeNumber = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }

  if (!isPrimeNumber) {
    console.log(`false`);
  } else {
    console.log(`true`);
  }
}

primeNumberChecker(7);
