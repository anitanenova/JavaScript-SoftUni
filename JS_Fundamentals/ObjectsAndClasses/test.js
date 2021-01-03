var person = {
  firstName: "Ani",
  lastName: "Kani",
  age: 23,
};

//~~~~~~~~~~ forEach// Object.keys()

//Object.keys(person).forEach((key) => console.log(key + " --> " + person[key]));

//~~~~~~~~~~ for in (objects aren't itterables -> can't use for of);

for (const key in person) {
  console.log(key + " --> " + person[key]);
}

//~~~~~~~~~~ Object.entries();
//let personEntries = Object.entries(person);

//console.log(personEntries);

/*for (const kvp of personEntries) {
  console.log(kvp[0] + " ~~> " + kvp[1]);
}*/
