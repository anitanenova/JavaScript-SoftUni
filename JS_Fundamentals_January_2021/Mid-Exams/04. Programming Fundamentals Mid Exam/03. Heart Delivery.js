function solve(arr) {
  let neghborhood = arr.shift().split("@");

  let jumpStep = 0;

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let [command, length] = arr[i].split(" ");
    length = Number(length);

    if (command === "Love!") {
      result += `Cupid's last position was ${jumpStep}.\n`;

      let failedPlases = neghborhood.filter((x) => x != 0).length;

      if (failedPlases == 0) {
        result += `Mission was successful.`;
      } else {
        result += `Cupid has failed ${failedPlases} places.`;
      }

      break;
    } else {
      jumpStep += length;
      if (jumpStep >= neghborhood.length) {
        jumpStep = 0;
      }

      if (neghborhood[jumpStep] == 0) {
        result += `Place ${jumpStep} already had Valentine's day.\n`;
      } else {
        neghborhood[jumpStep] -= 2;
        if (neghborhood[jumpStep] == 0) {
          result += `Place ${jumpStep} has Valentine's day.\n`;
        }
      }
    }
  }

  return result;
}
