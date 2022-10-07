// Data Types and Variables - More Exercises
// 04. Biggest of 3 Numbers

function biggestOf3Numbers(n1, n2, n3) {
  let biggestNum = n1;

  if (n2 >= biggestNum) {
    biggestNum = n2;
  }

  if (n3 >= biggestNum) {
    biggestNum = n3;
  }

  console.log(biggestNum);
}

biggestOf3Numbers(-2, 7, 3);
