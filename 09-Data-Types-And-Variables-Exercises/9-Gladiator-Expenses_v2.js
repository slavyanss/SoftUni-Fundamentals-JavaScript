// Data Types and Variables - Exercise
// 09. Gladiator Expenses

function gladiatorExpenses(lostFights, helmetP, swordP, shieldP, armorP) {
  let counter = 0;

  let helmetBrokenCount = 0;
  let swordBrokenCount = 0;
  let shieldBrokenCount = 0;
  let armorBrokenCount = 0;

  for (let i = 0; i < lostFights; i++) {
    counter++;
    if (counter % 2 === 0) {
      helmetBrokenCount++;
    }

    if (counter % 3 === 0) {
      swordBrokenCount++;
    }

    if (counter % 2 === 0 && counter % 3 === 0) {
      shieldBrokenCount++;
      if (shieldBrokenCount % 2 === 0) {
        armorBrokenCount++;
      }
    }
  }

  let helmetSum = helmetP * helmetBrokenCount;
  let swordSum = swordP * swordBrokenCount;
  let armorSum = armorP * armorBrokenCount;
  let shieldSum = shieldP * shieldBrokenCount;

  let sum = helmetSum + swordSum + armorSum + shieldSum;

  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
