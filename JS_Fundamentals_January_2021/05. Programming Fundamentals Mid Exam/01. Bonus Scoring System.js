function solve(arr) {
  let numberOfStudents = arr.shift();
  let countLectures = arr.shift();
  let initialBonus = arr.shift();

  let highestScore = 0;
  let totalBonus = 0;

  for (let i = 0; i < numberOfStudents; i++) {
    let student = Number(arr[i]);
    if (student <= countLectures) {
      if (student > highestScore) {
        highestScore = student;
        totalBonus = Math.ceil(
          (student / Number(countLectures)) * (5 + Number(initialBonus))
        );
      }
    }
  }

  return `Max Bonus: ${totalBonus}.\nThe student has attended ${highestScore} lectures.`;
}
