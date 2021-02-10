function solve(input) {
  let data = JSON.parse(input);

  let result = data.reduce((acc, x) => {
    return { ...acc, ...x };
  }, {});

  return result;
}

console.log(
  solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)
);
