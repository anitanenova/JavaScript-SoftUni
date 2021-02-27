function solve(priceRatings, entryPoint, typeItems) {
  let startNumber = priceRatings[entryPoint];

  let leftSide = priceRatings.slice(0, entryPoint);
  let rightSide = priceRatings.slice(entryPoint + 1);

  let leftSideSum = 0;
  let rightSideSum = 0;

  if (typeItems === "cheap") {
    leftSide.map((x) => {
      if (x < startNumber) {
        leftSideSum += x;
      }
    });

    rightSide.map((x) => {
      if (x < startNumber) {
        rightSideSum += x;
      }
    });
  } else if (typeItems === "expensive") {
    leftSide.map((x) => {
      if (x >= startNumber) {
        leftSideSum += x;
      }
    });

    rightSide.map((x) => {
      if (x >= startNumber) {
        rightSideSum += x;
      }
    });
  }

  if (leftSideSum >= rightSideSum) {
    return `Left - ${leftSideSum}`;
  } else {
    return `Right - ${rightSideSum}`;
  }
}
