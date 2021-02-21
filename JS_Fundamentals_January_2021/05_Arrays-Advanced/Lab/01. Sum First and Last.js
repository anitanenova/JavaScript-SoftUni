function solve(arr) {
  const firstElement = arr[0];
  const secondElement = arr[arr.length - 1];

  return Number(firstElement) + Number(secondElement);
}
