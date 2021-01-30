function solve(number, arr) {
  let newArr = arr.splice(0, number);

  console.log(newArr.reverse().join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
