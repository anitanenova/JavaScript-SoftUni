function passwordValidator(password) {
  let isValid = true;
  checkLength(password);
  checkConsist(password);
  checkDigits(password);

  if (isValid) {
    return "Password is valid";
  }

  function checkLength(password) {
    if (!(password.length >= 6 && password.length <= 10)) {
      isValid = false;
      console.log(`Password must be between 6 and 10 characters`);
    }
  }

  function checkConsist(password) {
    const regex = /\W|_/g;
    if (regex.test(password)) {
      console.log(`Password must consist only of letters and digits`);
      isValid = false;
    }
  }

  function checkDigits(password) {
    const regex = /^\d+$/;
    let counter = 0;

    for (let i = 0; i < password.length; i++) {
      if (regex.test(password[i])) {
        counter++;
      }
    }

    if (counter < 2) {
      console.log(`Password must have at least 2 digits`);
      isValid = false;
    }
  }
}
