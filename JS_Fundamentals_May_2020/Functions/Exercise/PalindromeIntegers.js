function checkPalindrome(arr) {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i].toString();
    console.log(check(element));
  }
  function check(number) {
    if (number[0] == number[number.length - 1]) {
      return true;
    } else {
      return false;
    }
  }
  return;
}

console.log(checkPalindrome([123, 202]));
