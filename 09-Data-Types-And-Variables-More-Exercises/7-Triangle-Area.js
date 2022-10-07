//Data Types and Variables - More Exercises - 07. Triangle Area

function triangleArea(a, b, c) {
  
  let s = (a + b + c) / 2;

  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  console.log(area);
}

triangleArea(2,
  3.5,
  4
  );
