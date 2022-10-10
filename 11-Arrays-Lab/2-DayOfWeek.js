// 11. Arrays - Lab
// 02. Day of Week

function dayOfWeek(n) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]; // 0..6 index

  if (n >= 1 && n <= 7) {
    console.log(days[n - 1]);
  } else {
    console.log(`Invalid day!`);
  }
}

dayOfWeek(3);
