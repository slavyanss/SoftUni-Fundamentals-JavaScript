// Basic Syntax, Conditional Statements and Loops - Exercise
// 9. Login

function login(arr) {
  let index = 0;

  let username = arr[0];
  index++;

  let splitString = username.split("");
  let reverseArray = splitString.reverse();
  let password = reverseArray.join("");

  let countErrors = 0;

  let isUserBlocked = false;

  while (arr[index] !== password) {
    countErrors++;

    if (countErrors === 4) {
      isUserBlocked = true;
      break;
    }

    console.log("Incorrect password. Try again.");

    index++;
  }

  if (isUserBlocked) {
    console.log(`User ${arr[0]} blocked!`);
  } else {
    console.log(`User ${arr[0]} logged in.`);
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
//login(["momo", "omom"]);
