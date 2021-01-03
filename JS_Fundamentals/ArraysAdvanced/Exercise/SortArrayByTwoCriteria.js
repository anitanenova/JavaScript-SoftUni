function solve(list) {
  let sortByAl = list.sort((a, b) => a.localeCompare(b));
  let sort = sortByAl.sort((a, b) => a.length - b.length);
  console.log(sort.join("\n"));
}

console.log(solve(["George", "Harrison", "Isacc", "Jack", "Theodor"]));
