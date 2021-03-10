function solve(input) {
  let schedule = {};

  let result = "";
  input.map((str) => {
    let [day, person] = str.split(" ");

    if (schedule.hasOwnProperty(day)) {
      result += `Conflict on ${day}!\n`;
    } else {
      schedule[day] = person;
      result += `Scheduled for ${day}\n`;
    }
  });

  Object.keys(schedule).forEach((key) => {
    result += `${key} -> ${schedule[key]}\n`;
  });

  return result;
}
