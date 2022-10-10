// 11. Arrays - Lab
// 06. Even and Odd Subtraction

function evenAndOddSubtraction(arr) {
  let sum = 0;

  for (let numTest of arr) {
    if (numTest % 2 === 0) {
      sum += numTest;
    } else {
      sum -= numTest;
    }
  }

  console.log(sum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
