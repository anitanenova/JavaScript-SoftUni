function solve(name, age, weight, height) {
  let person = {
    name: name,
    personalInfo: {
      age: age,
      weight: weight,
      height: height,
    },
    BMI: calculateBMI((weight, height)),
    status: status(),
  };

  function calculateBMI() {
    return Math.round(weight / (height / 100) ** 2);
  }

  function status() {
    let bmi = calculateBMI((weight, height));
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "overweight";
    } else if (bmi >= 30) {
      return "obese";
    }
  }

  if (person.status == "obese") {
    person["recommendation"] = "admission required";
  }

  return person;
}
