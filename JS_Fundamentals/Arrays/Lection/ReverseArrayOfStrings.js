function solve(numbers) {
  let reversedArr = [];
  let result = "";
  let countSwap = Math.ceil(numbers.length / 2);

  for (let i = 0; i < countSwap; i++) {
    reversedArr[i] = numbers[numbers.length - 1 - i];
    reversedArr[numbers.length - 1 - i] = numbers[i];
  }

  for (let number of reversedArr) {
    result += number + " ";
  }

  console.log(result);
}

solve(["a", "b", "c", "d", "e"]);
