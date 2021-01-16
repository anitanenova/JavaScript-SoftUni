function solve(number, numberPrecision) {
  console.log(
    parseFloat(number.toFixed(numberPrecision < 15 ? numberPrecision : 15))
  );
}

solve(3.65268526985, 3);
