function sum(numbers) {
  let firstNum = Number(numbers.shift());
  let lastNum = Number(numbers.pop());
  return firstNum + lastNum;
}

console.log(sum([10, 15, 20]));
