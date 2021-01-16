function solve(base, increment) {
  let sumStone = 0;
  let sumMarble = 0;
  let sumLazuli = 0;
  let sumGold = 0;

  let stepCount = 1;
  let currentStep = base;

  function squareArea(a) {
    return a * a;
  }

  function increaseOuterMaterial() {
    return (squareArea(currentStep) - squareArea(currentStep - 2)) * increment;
  }

  while (currentStep - 2 >= 1) {
    let reducedArea = squareArea(currentStep - 2);
    sumStone += reducedArea * increment;
    if (stepCount % 5 === 0) {
      sumLazuli += increaseOuterMaterial();
    } else {
      sumMarble += increaseOuterMaterial();
    }
    stepCount += 1;
    currentStep -= 2;
  }

  if (currentStep === 4) {
    currentStep -= 2;
  }
  sumGold = squareArea(currentStep) * increment;

  height = Math.floor(stepCount * increment);

  console.log(`Stone required: ${Math.ceil(sumStone)}`);
  console.log(`Marble required: ${Math.ceil(sumMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(sumLazuli)}`);
  console.log(`Gold required: ${Math.ceil(sumGold)}`);
  console.log(`Final pyramid height: ${height}`);
}

solve(23, 0.5);
