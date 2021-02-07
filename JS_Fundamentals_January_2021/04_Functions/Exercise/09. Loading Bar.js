function loadingBar(number) {
  let loaded = number / 10;
  let notLoaded = 10 - loaded;

  let result = "";

  if (loaded < 10) {
    result = `${number}% [${"%".repeat(loaded)}${".".repeat(
      notLoaded
    )}]\nStill loading...`;
  } else {
    result = `${number}% Complete\n[${"%".repeat(loaded)}]`;
  }

  return result;
}

console.log(loadingBar(100));
