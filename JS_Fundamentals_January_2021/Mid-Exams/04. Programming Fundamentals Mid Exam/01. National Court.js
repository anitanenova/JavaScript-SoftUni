function solve(arr) {
  let countPeople = Number(arr.pop());

  let modifiedArr = arr.map(Number);

  let answersPerHour = modifiedArr.reduce((acc, x) => {
    return (acc += x);
  });
  let countHours = 0;

  while (countPeople > 0) {
    countHours++;

    if (countHours % 4 != 0) {
      countPeople -= answersPerHour;
    }
  }

  return `Time needed: ${countHours}h.`;
}
