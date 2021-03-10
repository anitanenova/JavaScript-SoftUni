function solve(input) {
  let students = {};

  let result = "";

  input.map((str) => {
    let [name, ...grades] = str.split(" ");

    if (students.hasOwnProperty(name)) {
      students[name].push(...grades);
    } else {
      students[name] = grades;
    }
  });

  Object.keys(students)
    .sort((a, b) => {
      return averageGrade(students[a]) - averageGrade(students[b]);
    })
    .forEach((key) => {
      result += `${key}: ${students[key].join(", ")}\n`;
    });

  function averageGrade(grades) {
    let averageGrade = grades.reduce((acc, x) => {
      acc += Number(x);
      return acc;
    }, 0);
    return averageGrade / grades.length;
  }

  return result;
}
