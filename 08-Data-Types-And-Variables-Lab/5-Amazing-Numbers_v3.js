//Data Types and Variables - Lab
// 05. Amazing Numbers

function amazingNumbers(num){

  let numToSting = String(num); // "1233"
  let sum = 0;
  for(let i = 0; i < numToSting.length; i++){
    sum += Number(numToSting[i]);
  }

  let result = String(sum).includes("9");
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`)

}

amazingNumbers(1233);
