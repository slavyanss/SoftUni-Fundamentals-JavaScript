// 11. Arrays - Lab
// 03. Reverse an Array of Numbers

function reverseAnArrayOfNumbers(num, arr1){

    let arr2 = [];

    for(let i = num - 1; i >= 0; i--){
        arr2.push(arr1[i]);
    }

    console.log(arr2.join(" "));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])