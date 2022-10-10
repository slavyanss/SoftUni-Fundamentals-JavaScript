// 11. Arrays - Lab
// 05. Sum Even numbers

function sumEvenNumbers(arr) {
  let sum = 0;

  for (let input of arr) {
    let currentNum = Number(input);
    if (currentNum % 2 === 0) {
      sum += currentNum;
    }
  }

  console.log(sum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
