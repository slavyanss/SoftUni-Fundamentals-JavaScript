// Basic Syntax, Conditional Statements and Loops - Exercise
// 7. Triangle Of Numbers

function triangleOfNumbers(num) {
  for (let row = 1; row <= num; row++) {
    let string1 = "";
    for (let j = 1; j <= row; j++) {
      string1 += row + " ";
    }

    // let j = 1;
    // while(j <= i){
    //     string1 = i + " ";
    //     j++;
    // }

    console.log(string1);
  }
}

triangleOfNumbers(3);
