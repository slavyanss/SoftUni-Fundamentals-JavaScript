function testtt(arr) {
  let sum = 0;

  for (let i of arr) {
    let currentNum = Number(arr[i]);
    if (currentNum % 2 === 0) {
      sum += currentNum;
    }
  }

  // for(let i = 0; i < arr.length; i++){
  //     let x = Number(arr[i]);
  //     if(x % 2 === 0){
  //         sum += x;
  //     }
  // }
  console.log(sum);
}

testtt(["1", "2", "3", "4", "5", "6"]);
