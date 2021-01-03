function solve(input) {
  let terms = [];

  for (let key of input) {
    let term = JSON.parse(key);
    if (terms.length != 0) {
      for (const key in term) {
        let termName = key;
        let description = term[key];
        for (let i = 0; i < terms.length; i++) {
          let termArr = terms[i];
          if (termArr.hasOwnProperty(termName)) {
            for (const keyTermArr in termArr) {
              termArr[keyTermArr] = description;
              break;
            }
          } else if (
            !termArr.hasOwnProperty(termName) &&
            i + 1 == terms.length
          ) {
            terms.push(term);
            break;
          } else {
            continue;
          }
          break;
        }
        break;
      }
    } else {
      terms.push(term);
    }
  }

  let keys = [];

  for (let i = 0; i < terms.length; i++) {
    let current = terms[i];
    for (const key in current) {
      keys.push(key);
    }
  }
  let sortKeys = keys.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < sortKeys.length; i++) {
    for (let y = 0; y < terms.length; y++) {
      let currentTerm = terms[y];
      for (const term in currentTerm) {
        if (term == sortKeys[i]) {
          console.log(`Term: ${term} => Definition: ${currentTerm[term]}`);
        }
      }
    }
  }
}

console.log(
  solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"test"}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Bus":"test2"}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  ])
);
