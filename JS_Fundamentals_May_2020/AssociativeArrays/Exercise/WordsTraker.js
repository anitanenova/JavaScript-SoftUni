function solve(input) {
  /*
  // decision with Map
  
  let map = new Map();
  let words = input.shift().split(" ");
  let restWords = input;
  let counter = 0;

  for (const word of words) {
    map.set(word, counter);
  }

  for (const el of restWords) {
    if (map.has(el)) {
      let oldCounter = map.get(el);
      map.set(el, oldCounter + 1);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (const kvp of sorted) {
    console.log(`${kvp[0]} - ${kvp[1]}`);
  } */

  // decision with Object

  let obj = {};
  let words = input.shift().split(" ");
  let restWords = input;
  let counter = 0;

  for (const word of words) {
    obj[word] = counter;
  }

  for (const el of restWords) {
    if (obj.hasOwnProperty(el)) {
      let oldCounter = obj[el];
      obj[el] = oldCounter + 1;
    }
  }

  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  for (const kvp of sorted) {
    console.log(`${kvp[0]} - ${kvp[1]}`);
  }
}

console.log(
  solve([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurances",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
  ])
);
