// Data Types and Variables - Exercise
// 09. Gladiator Expenses

function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let sum = 0;

  let helmetTrached = 0;
  let swordTrashed = 0;
  let shieldTrashed = 0;
  let armorTrashed = 0;

  let count = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      helmetTrached++;
    }

    if (i % 3 === 0) {
      swordTrashed++;
    }

    if (i % 2 === 0 && i % 3 === 0) {
      shieldTrashed++;
      count++;
      if (count % 2 === 0) {
        armorTrashed++;
      }
    }

    // if(count % 2 === 0){
    //     armorTrashed++;
    // }
  }

  let helmetSum = helmetTrached * helmetPrice;
  let swordSum = swordTrashed * swordPrice;
  let shieldSum = shieldTrashed * shieldPrice;
  let armorSum = armorTrashed * armorPrice;
  //console.log(armorTrashed);

  sum = helmetSum + swordSum + shieldSum + armorSum;

  // let sum = 0;
  // let isHelmetBroken = false;
  // let isSwordBroken = false;
  // let isShieldBroken = false;

  // let shieldBrokenCount = 0;

  // for(let i = 1; i <= 7; i++){

  //     if(i % 2 === 0){
  //         isHelmetBroken = true;
  //         sum += helmetPrice;
  //     }

  //     if(i % 3 === 0){
  //         isSwordBroken = true;
  //         sum += swordPrice;
  //     }

  //     if(isHelmetBroken && isSwordBroken){
  //         shieldBrokenCount++;
  //         isShieldBroken = true;
  //         sum += shieldPrice;
  //     }

  //     if(shieldBrokenCount % 2 === 0){
  //         sum += armorPrice;
  //     }

  //     isHelmetBroken = false;
  //     isSwordBroken = false;
  //     isShieldBroken = false;

  // }

  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
