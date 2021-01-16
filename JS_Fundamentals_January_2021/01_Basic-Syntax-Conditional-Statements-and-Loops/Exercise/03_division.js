function solve(numberDivisible) {
  let number = 0;
  if (numberDivisible % 10 == 0) {
    number = 10;
    console.log(`The number is divisible by ${number}`);
  } else if (numberDivisible % 7 == 0) {
    number = 7;
    console.log(`The number is divisible by ${number}`);
  } else if (numberDivisible % 6 == 0) {
    number = 6;
    console.log(`The number is divisible by ${number}`);
  } else if (numberDivisible % 3 == 0) {
    number = 3;
    console.log(`The number is divisible by ${number}`);
  } else if (numberDivisible % 2 == 0) {
    number = 2;
    console.log(`The number is divisible by ${number}`);
  } else {
    console.log("Not divisible");
  }
}

solve(1643);
