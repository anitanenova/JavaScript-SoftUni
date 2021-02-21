function solve(numbersArr, specialNumbersArr) {
  let [get, deleted, searched] = specialNumbersArr;

  let newArr = numbersArr.slice(0, get);
  newArr.splice(0, deleted);

  let count = 0;

  newArr.map((x) => (x === searched ? count++ : null));

  return `Number ${searched} occurs ${count} times.`;
}
