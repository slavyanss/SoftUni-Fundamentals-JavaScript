// Basic Syntax, Conditional Statements and Loops - Exercise
// 5. Leap Year

function leapYear(year) {
  let isLeap = false;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeap = true;
  }

  if (isLeap) {
    console.log(`yes`);
  } else {
    console.log(`no`);
  }
}

leapYear(1984);
