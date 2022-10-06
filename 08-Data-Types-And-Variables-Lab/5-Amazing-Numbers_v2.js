//Data Types and Variables - Lab
// 05. Amazing Numbers

function amazingNumbers(num) {
  let numToString = String(num);

  let sum = 0;
  let isAmazing = false;

  for (let i = 0; i < numToString.length; i++) {
    let currentSymbol = numToString[i];
    sum += Number(currentSymbol);
  }

  let sumToString = String(sum);

  for(let j = 0; j < sumToString.length; j++){
    let currentDigit = sumToString[j];
    if(currentDigit == 9){
        isAmazing = true;
        break;
    }
  }

  if(isAmazing){
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }

  

}

amazingNumbers(1223);
