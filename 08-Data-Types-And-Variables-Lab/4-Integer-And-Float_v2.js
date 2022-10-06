//Data Types and Variables - Lab
// 04. Integer and Float
	
function integerAndFloat(n1, n2, n3){

    let sum = n1 + n2 + n3;

    let sumToString = String(sum);
    let type = "";
    let isFloat = false;

    for(let i = 0; i < sumToString.length; i++){
        let currentSymbol = sumToString[i];
        if(currentSymbol == "."){
            isFloat = true;
            break;
        } 
    }

    if(isFloat){
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }
  
}

integerAndFloat(9, 100, 1.1)


