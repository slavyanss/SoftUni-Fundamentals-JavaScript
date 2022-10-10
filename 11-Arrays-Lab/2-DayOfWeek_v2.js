// 11. Arrays - Lab
// 02. Day of Week

function dayOfWeek(n) {
  if (n < 1 || n > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    console.log(days[n - 1]);
  }
}

dayOfWeek(3);
