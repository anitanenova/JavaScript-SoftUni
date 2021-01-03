function solve(numberOfDay) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (numberOfDay < 1 || numberOfDay > days.length) {
    console.log("Invalid day!");
  } else {
    console.log(days[numberOfDay - 1]);
  }
}

solve(3);
