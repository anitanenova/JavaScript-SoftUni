function solve(steps, length, speed) {
  let stepsNumber = Number(steps);
  let stepsMetersHr = Number(length);
  let studentSpeed = Number(speed);
  let distanceMeters = stepsNumber * stepsMetersHr;
  let speedMetersSec = studentSpeed / 3.6;
  let time = distanceMeters / speedMetersSec;
  let rest = Math.floor(distanceMeters / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - timeMin * 60);
  let timeHr = Math.floor(time / 3600);

  if (timeHr < 10) {
    console.log(timeHr + "0:" + (timeMin + rest) + ":" + timeSec);
  } else {
    console.log(timeHr + ":" + (timeMin + rest) + ":" + timeSec);
  }
}

console.log(solve(4000, 0.6, 5));
