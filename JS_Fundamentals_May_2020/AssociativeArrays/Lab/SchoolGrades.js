function solve(input) {
  let students = {};
  for (let line of input) {
    let currentArr = line.split(" ");
    let name = currentArr.shift();
    let notes = currentArr.map(Number);

    if (students.hasOwnProperty(name)) {
      let oldNotes = students[name];
      students[name] = oldNotes.concat(notes);
    } else {
      students[name] = notes;
    }
  }

  let studentsEntries = Object.entries(students);
  let sortedStudentsEntries = studentsEntries.sort((a, b) => {
    let studentNameA = a[0];
    let studentGradeA = a[1];
    let studentNameB = b[0];
    let studentGradeB = b[1];

    let averageGradeA = getAverageGrade(studentGradeA);
    let averageGradeB = getAverageGrade(studentGradeB);

    return averageGradeA - averageGradeB;
  });

  for (const kvp of sortedStudentsEntries) {
    console.log(`${kvp[0]}: ${kvp[1].join(", ")}`);
  }

  function getAverageGrade(grades) {
    let gradesSum = 0;
    for (let grade of grades) {
      gradesSum += grade;
    }

    return gradesSum / grades.length;
  }
}

console.log(solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]));
