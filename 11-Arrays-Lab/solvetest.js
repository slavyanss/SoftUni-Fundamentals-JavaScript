function solvetest(arr) {

    while(arr.length > 1){

       let arr2 = [];
       
       for(let i = 0; i < arr.length - 1; i++){
        arr2.push(arr[i] + arr[i + 1]);
       } 
        
       arr = arr2;

    }

    console.log(arr.join(" "));

}

solvetest([1]);
