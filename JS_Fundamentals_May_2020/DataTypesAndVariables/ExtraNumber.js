function amazingNumber(number) {
  let numberText = number.toString();
  let sum = 0;
  for (let index = 0; index < numberText.length; index++) {
    sum += Number(numberText[index]);
  }

  console.log(
    `${number} Amazing? ${sum.toString().match("9") ? "True" : "False"}`
  );
}

amazingNumber(999);

//amazing are the numbers who have 9 in sum
