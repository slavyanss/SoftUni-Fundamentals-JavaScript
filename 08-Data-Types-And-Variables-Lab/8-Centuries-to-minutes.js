// Data Types and Variables - Lab
// 08. Centuries to Minutes
	
function centuriesToMinutes(num){

    // 1 year = 365.2422 days

    let years = num * 100;
    let days = Math.trunc(years * 365.2422); // moje i s Math.floor
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}

centuriesToMinutes(1)

