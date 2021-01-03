function solve(input) {
  let map = new Map();
  let words = input.split(" ");
  let counter = 1;

  for (const word of words) {
    let notSpecificWord = word.toLowerCase();
    if (map.has(notSpecificWord)) {
      let oldCounter = map.get(notSpecificWord);
      map.set(notSpecificWord, oldCounter + 1);
    } else {
      map.set(notSpecificWord, counter);
    }
  }

  let mapEntries = Array.from(map);
  let kvps = [];
  for (const kvp of mapEntries) {
    if (kvp[1] % 2 != 0) {
      kvps.push(kvp[0]);
    }
  }

  console.log(kvps.join(" "));
}

console.log(solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#"));
