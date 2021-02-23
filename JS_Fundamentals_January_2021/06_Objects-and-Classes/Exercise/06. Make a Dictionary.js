function solve(arr) {
  let terms = {};
  let result = "";

  arr
    .map((x) => JSON.parse(x))
    .map((x) => {
      let currentObj = Object.keys(x);
      if (terms.hasOwnProperty(currentObj)) {
        terms[currentObj] = x[currentObj];
      } else {
        terms[currentObj] = x[currentObj];
      }
    });

  let sorted = Object.keys(terms).sort();
  sorted.map((x) => {
    result += `Term: ${x} => Definition: ${terms[x]}\n`;
  });

  return result;
}
