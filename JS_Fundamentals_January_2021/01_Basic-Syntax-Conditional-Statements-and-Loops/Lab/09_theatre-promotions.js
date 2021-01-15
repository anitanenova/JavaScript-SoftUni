function solve(day, age) {
  age = Number(age);
  let price = "Error!";

  if (age >= 0 && age <= 18) {
    if (day === "Weekday") {
      price = "12$";
    } else if (day === "Weekend") {
      price = "15$";
    } else if (day === "Holiday") {
      price = "5$";
    }
  } else if (age > 18 && age <= 64) {
    if (day === "Weekday") {
      price = "18$";
    } else if (day === "Weekend") {
      price = "20$";
    } else if (day === "Holiday") {
      price = "12$";
    }
  } else if (age > 64 && age <= 122) {
    if (day === "Weekday") {
      price = "12$";
    } else if (day === "Weekend") {
      price = "15$";
    } else if (day === "Holiday") {
      price = "10$";
    }
  }

  console.log(price);
}

solve("Holiday", 15);
