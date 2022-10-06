//Data Types and Variables - Lab
// 04. Integer and Float
	
function integerAndFloat(n1, n2, n3){

    let sum = n1 + n2 + n3;
    let type = "";

    if(Number.isInteger(sum)){
        type = "Integer";
    } else {
        type = "Float";
    }

    console.log(`${sum} - ${type}`);
  
}

integerAndFloat(9, 100, 1.1)


