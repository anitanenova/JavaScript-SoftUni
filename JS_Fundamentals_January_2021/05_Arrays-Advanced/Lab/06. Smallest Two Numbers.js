function solve(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr[0] + " " + sortedArr[1];
}
