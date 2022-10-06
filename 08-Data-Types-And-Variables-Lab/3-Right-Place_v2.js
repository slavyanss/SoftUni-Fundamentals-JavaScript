//Data Types and Variables - Lab
// 03. Right Place

function rightPlace(st1, ch, st2) {
  let newString = "";

  for (let i = 0; i < st1.length; i++) {
    let currentChar = st1[i];
    if (currentChar === "_") {
      newString += ch;
    } else {
      newString += currentChar;
    }
  }

  if (newString === st2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "I", "Strong");
