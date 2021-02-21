function solve(arr) {
  const newArr = [];

  arr.map((x) => (arr.indexOf(x) % 2 != 0 ? newArr.push(x * 2) : null));

  return newArr.reverse().join(" ");
}
