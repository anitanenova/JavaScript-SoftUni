function solve(input) {
  let typeInput = typeof input;

  if (typeInput == "number") {
    console.log((Math.PI * input * input).toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeInput}.`
    );
  }
}

console.log(solve(5));
