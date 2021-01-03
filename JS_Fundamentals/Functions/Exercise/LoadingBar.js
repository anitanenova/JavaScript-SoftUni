function solve(number) {
  let symbolLoaded = "%";
  let symbolNotLoaded = ".";
  let numLoaded = number / 10;
  let numNotLoaded = 10 - numLoaded;

  function isLoad(symbol, count) {
    let result = "";
    for (let i = 0; i < count; i++) {
      result += symbol;
    }
    return result;
  }

  if (numLoaded < 10) {
    return (result = `${number + symbolLoaded} [${isLoad(
      symbolLoaded,
      numLoaded
    )}${isLoad(symbolNotLoaded, numNotLoaded)}]\nStill loading...`);
  } else {
    return (result = `${number + symbolLoaded} Complete!\n[${isLoad(
      symbolLoaded,
      numLoaded
    )}${isLoad(symbolNotLoaded, numNotLoaded)}]`);
  }
}

console.log(solve(100));
