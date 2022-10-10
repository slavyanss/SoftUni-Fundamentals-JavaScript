// 11. Arrays - Lab
// 03. Reverse an Array of Numbers

function reverseAnArrayOfNumbers(num, arr1){

    let arr2 = [];

    for(let i = 0; i < num; i++){
        arr2.push(arr1[i]); // 10 20 30
    }

    let string1 = "";
    for(let j = arr2.length - 1; j >= 0; j--){
        string1 += arr2[j] + " ";
    }

    console.log(string1);


}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])