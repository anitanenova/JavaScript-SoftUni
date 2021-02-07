function checkPalindome(arr) {
  arr.forEach((element) => {
    element = element.toString();
    if (element.length == 1) {
      console.log(true);
    } else {
      if (element[0] == element[element.length - 1]) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  });
}

console.log(checkPalindome([2, 5, 131]));
