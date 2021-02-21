function solve(arr) {
  let result = "";

  arr
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .map((x) => (result += `${x}\n`));

  return result;
}
