let names = ["Zdravko", "Aneta", "Ivan", "ivan", "angel"];

console.log(names);

names.sort((a, b) => a.localeCompare(b)); // return +1 like the exemple with the numbers

console.log(names);
