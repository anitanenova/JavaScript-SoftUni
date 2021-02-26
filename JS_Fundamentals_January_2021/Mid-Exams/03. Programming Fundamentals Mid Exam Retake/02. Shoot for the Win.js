function solve(arr) {
  let targetSequence = arr.shift().split(" ").map(Number);
  let shotsCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentIndex = arr[i];

    if (currentIndex !== "End") {
      currentIndex = Number(currentIndex);

      let currentTargetNumber = targetSequence[currentIndex];
      if (currentIndex < targetSequence.length) {
        targetSequence[currentIndex] = -1;
        shotsCount++;
        for (let i = 0; i < targetSequence.length; i++) {
          if (i != currentIndex && targetSequence[i] != -1) {
            if (targetSequence[i] <= currentTargetNumber) {
              targetSequence[i] += currentTargetNumber;
            } else {
              targetSequence[i] -= currentTargetNumber;
            }
          }
        }
      }
    } else {
      return `Shot targets: ${shotsCount} -> ${targetSequence.join(" ")}`;
    }
  }
}
