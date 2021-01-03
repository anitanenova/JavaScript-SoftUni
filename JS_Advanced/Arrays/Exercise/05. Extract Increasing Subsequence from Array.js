function solve(arr) {
  let newArr = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] < arr[i + 1] && arr[i + 1] > newArr[j]) {
        newArr.push(arr[i + 1]);
        break;
      }
    }
  }
  for (const num of newArr) {
    console.log(num);
  }
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
