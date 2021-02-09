function argumentInfo() {
  let result = [];
  let count = {};

  [...arguments].forEach((argument) => {
    let type = typeof argument;

    result.push({ type, value: argument });

    if (!count[type]) {
      count[type] = 0;
    }

    count[type]++;
  });

  result.forEach((r) => console.log(`${r.type}: ${r.value}`));

  let sortedCount = Object.entries(count).sort((a, b) => b[1] - a[1]);

  sortedCount.forEach((element) =>
    console.log(`${element[0]} = ${element[1]}`)
  );
}
