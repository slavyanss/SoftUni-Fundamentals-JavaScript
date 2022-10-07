//Data Types and Variables - More Exercises 
//03. Cone

function cone(radius, height) {
  let r = Number(radius);
  let h = Number(height);

  let volume = (1 / 3) * Math.PI * r * r * h;
  let surfaceArea = Math.PI * r * (r + Math.sqrt(r * r + h * h));

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${surfaceArea.toFixed(4)}`);
}

cone(3, 5);
