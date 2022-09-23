// More Exercises: Basic Syntax, Conditional Statements, and Loops
// 5. Distance between Points

//formula: https://www.chilimath.com/lessons/intermediate-algebra/distance-formula-practice-problems-with-answers/

function distanceBetweenPoints(x1, y1, x2, y2) {
  let a = Math.abs(y2 - y1);
  let b = Math.abs(x2 - x1);

  let result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  console.log(result);
}

distanceBetweenPoints(2, 4, 5, 0);
