// Basic Syntax, Conditional Statements and Loops - Exercise
// 4. Vacation

function vacation(people, type, day) {
  let sum = 0;

  switch (type) {
    case "Students":
      if (day === "Friday") {
        sum = people * 8.45;
      } else if (day === "Saturday") {
        sum = people * 9.8;
      } else if (day === "Sunday") {
        sum = people * 10.46;
      }

      if (people >= 30) {
        sum *= 0.85;
      }

      break;
    case "Business":
      if (people >= 100) {
        people -= 10;
      }

      if (day === "Friday") {
        sum = people * 10.9;
      } else if (day === "Saturday") {
        sum = people * 15.6;
      } else if (day === "Sunday") {
        sum = people * 16;
      }

      break;

    case "Regular":
      if (day === "Friday") {
        sum = people * 15;
      } else if (day === "Saturday") {
        sum = people * 20;
      } else if (day === "Sunday") {
        sum = people * 22.5;
      }

      if (people >= 10 && people <= 20) {
        sum *= 0.95;
      }

      break;
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
