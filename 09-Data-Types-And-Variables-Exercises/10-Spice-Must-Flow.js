// Data Types and Variables - Exercise
// 10. Spice Must Flow

function spiceMustFlow(startingYield) {
  // totalAmountExtracted = ?
  // startingYield = indicates how much can be mined on the first day
  // mining crew -26 every day, end -26 after mine is abandoned (if possible)

  let dayCount = 0;
  let totalAmountExtracted = 0;

  //startingYield = 111;
  while (startingYield >= 100) {
    dayCount++;

    totalAmountExtracted += startingYield; // 111
    totalAmountExtracted -= 26; // workers 111 - 26 = 85

    startingYield -= 10;
  }

  totalAmountExtracted -= 26;

  if (totalAmountExtracted < 0) {
    totalAmountExtracted = 0;
  }

  console.log(dayCount);
  console.log(totalAmountExtracted);
}

spiceMustFlow(111);
