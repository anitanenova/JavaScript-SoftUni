function solve(numbers) {
  let newArr = [];
  while (numbers.length > 0) {
    let currentNumber = numbers.shift();

    if (currentNumber < 0) {
      newArr.unshift(currentNumber);
    } else {
      newArr.push(currentNumber);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
}
