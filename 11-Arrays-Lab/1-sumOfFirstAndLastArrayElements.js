// 11. Arrays - Lab
// 01. Sum First and Last Array Elements

function sumFirstAndLastArrayElements(arr){

    let firstNum = Number(arr[0]);
    let lastNum = Number(arr[arr.length - 1]);

    let sum = firstNum + lastNum;

    console.log(sum);

}

sumFirstAndLastArrayElements([20, 30, 40])