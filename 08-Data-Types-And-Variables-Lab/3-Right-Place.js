//Data Types and Variables - Lab
// 03. Right Place
	
function rightPlace(st1, ch, st2){

    let newString = st1.replace("_",ch);

    // if(newString === st2){
    //     console.log(`Matched`);
    // } else {
    //     console.log(`Not Matched`);
    // }

    let result = (newString === st2) ? `Matched` : "Not Matched"

    console.log(result);
 
}

rightPlace('Str_ng', 'I', 'Strong')



