function solve(arr) {
  let countAnswerStudentsHour = 0;
  let studentsCount = arr.pop();
  studentsCount = Number(studentsCount);

  let countHoursWork = 0;

  for (let i = 0; i < arr.length; i++) {
    countAnswerStudentsHour += Number(arr[i]);
  }

  while (studentsCount > 0) {
    countHoursWork++;

    if (countHoursWork % 4 != 0) {
      studentsCount -= countAnswerStudentsHour;
    }
  }

  return `Time needed: ${countHoursWork}h.`;
}
