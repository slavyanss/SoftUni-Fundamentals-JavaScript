// More Exercises: Basic Syntax, Conditional Statements, and Loops
// 2. English Name of the Last Digit
	
function englishNameOfTheLastDigit(num){

    let lastDigit = num % 10;

    let englishName = "";

    switch(lastDigit){
        case 1: englishName = "one"; break;
        case 2: englishName = "two"; break;
        case 3: englishName = "three"; break;
        case 4: englishName = "four"; break;
        case 5: englishName = "five"; break;
        case 6: englishName = "six"; break;
        case 7: englishName = "seven"; break;
        case 8: englishName = "eight"; break;
        case 9: englishName = "nine"; break;
        case 0: englishName = "zero"; break;

    }

    console.log(englishName)

}

englishNameOfTheLastDigit(512)


