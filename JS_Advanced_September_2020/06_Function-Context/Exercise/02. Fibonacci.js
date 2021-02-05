function getFibonator() {
  let currentNumber = 0;
  let nextNumber = 1;

  function fib() {
    let fibonaccibNumber = currentNumber + nextNumber;
    currentNumber = nextNumber;
    nextNumber = fibonaccibNumber;

    return currentNumber;
  }

  return fib;
}
