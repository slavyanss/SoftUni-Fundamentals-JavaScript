function solve(yield){

  let total = 0;
  let dayCount = 0;

  while(yield >= 100){

    dayCount++;

    total += yield;
    total -= 26;

    yield -= 10;
  }

  total -= 26;
  if(total < 0){
    total = 0;
  }

  console.log(dayCount);
  console.log(total);

}


solve(111);
