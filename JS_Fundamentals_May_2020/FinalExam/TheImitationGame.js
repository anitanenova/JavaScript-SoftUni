function solve(arr) {
  let encryptedMessage = arr.shift();

  for (const command of arr) {
    if (command == "Decode") {
      console.log(`The decrypted message is: ${encryptedMessage}`);
    } else {
      let [name, instructionOne, instructionTwo] = command.split("|");
      if (name == "Move") {
        let firstNLetters = encryptedMessage.slice(0, instructionOne);
        let restOfWord = encryptedMessage.slice(instructionOne);
        encryptedMessage = restOfWord + firstNLetters;
      } else if (name == "Insert") {
        encryptedMessage = [
          encryptedMessage.slice(0, instructionOne),
          instructionTwo,
          encryptedMessage.slice(instructionOne),
        ].join("");
      } else if (name == "ChangeAll") {
        while (encryptedMessage.includes(instructionOne)) {
          encryptedMessage = encryptedMessage.replace(
            instructionOne,
            instructionTwo
          );
        }
      }
    }
  }
}

console.log(solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]));
