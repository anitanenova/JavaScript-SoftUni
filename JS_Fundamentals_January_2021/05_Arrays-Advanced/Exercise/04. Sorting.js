function solve(arr) {
  let newArr = [];
  let length = arr.length;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    if (i % 2 == 0) {
      newArr.push(arr.pop());
    } else {
      newArr.push(arr.shift());
    }
  }

  console.log(newArr.join(" "));
}
