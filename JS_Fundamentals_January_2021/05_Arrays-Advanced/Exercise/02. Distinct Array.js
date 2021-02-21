function solve(arr) {
  let newArr = [];

  arr.map((x) => {
    if (!newArr.includes(x)) {
      newArr.push(x);
    }
  });

  return newArr.join(" ");
}
