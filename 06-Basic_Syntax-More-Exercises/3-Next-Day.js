// More Exercises: Basic Syntax, Conditional Statements, and Loops
// 3. Next Day

function nextDay(year, month, day){

    let datichka = new Date(year, month - 1, day + 1);

    let y = datichka.getFullYear();
    let m = datichka.getMonth() + 1; // month
    let d = datichka.getDate();

    console.log(`${y}-${m}-${d}`);

}

nextDay(2016, 9, 30);