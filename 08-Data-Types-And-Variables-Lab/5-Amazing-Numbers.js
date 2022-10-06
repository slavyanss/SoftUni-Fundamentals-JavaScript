//Data Types and Variables - Lab
// 05. Amazing Numbers
	
function amazingNumbers(num){

    let number = num + ""; // prevry6tame v String

    let sum = 0;
    let isAmazing = false;

    for(let i = 0; i < number.length; i++){

        sum += Number(number[i]); // 1+2+3+3 = 9

    }

    sum += "";
    //isContaing9 = sum.toString().includes('9');
    for(let j = 0; j < sum.length; j++){    
        let currentDigit = Number(sum[j]);
        if(currentDigit == 9){
            isAmazing = true;
            break;
        }
    }

    if(isAmazing){
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }

}

amazingNumbers(1233)


