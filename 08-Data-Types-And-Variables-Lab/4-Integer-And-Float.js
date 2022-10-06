//Data Types and Variables - Lab
// 04. Integer and Float
	
function integerAndFloat(n1, n2, n3){

    let sum = n1 + n2 + n3;

    // let type;

    // if(sum % 1 == 0){
    //     type = "Integer";
    // } else {
    //     type = "Float";
    // }
    // console.log(`${sum} - ${type}`);

    let type = (sum % 1 == 0) ? "Integer" : "Float";
    console.log(`${sum} - ${type}`);

  
}

integerAndFloat(9, 100, 1.1)


