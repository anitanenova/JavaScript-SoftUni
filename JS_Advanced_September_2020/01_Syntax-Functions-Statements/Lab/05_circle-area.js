function solve(input) {
  let typeOfArgument = typeof input;

  let area = Math.PI * input * input;

  if (typeOfArgument == "number") {
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeOfArgument}.`
    );
  }
}

solve(5);
