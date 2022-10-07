// Data Types and Variables - Exercise
// 01. Sum Digits

function sumDigits(num) {
  let number = num.toString();
  //let number = num + ""; //ve4e 4isloto e String

  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    let currentDigit = Number(number[i]);

    sum += currentDigit;
  }

  console.log(sum);
}

sumDigits(245678);
