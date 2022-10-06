function solve(param) {
  let vid = typeof param;

  if (vid === "string" || vid === "number") {
    console.log(vid);
    console.log(param);
  } else {
    console.log(vid);
    console.log("Parameter is not suitable for printing");
  }
}

solve("Hello, JavaScript!");
