function solve(input) {
  let result = input.split(/#|\|/);
  let regexName = "/[A-Z][a-z}\\s/";
  let regexDate = "/d{2}/d{2}/d{2}/g";
  let regexCalorie = "/^([1-9][0-9]{0,3}|10000)$/";

  if (input.match(regexName)) {
  }
  console.log(result);
}

console.log(
  solve(
    "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|"
  )
);
