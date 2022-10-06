// Data Types and Variables - Lab
// 09. Special Numbers
	
function specialNumbers(num){

    for(let i = 1; i <= num; i++){

        let currentNum = i + "";

        let sum = 0;
        for(let j = 0; j < currentNum.length; j++){
            sum += Number(currentNum[j]);
        }
        
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }

    }


}

specialNumbers(15)

