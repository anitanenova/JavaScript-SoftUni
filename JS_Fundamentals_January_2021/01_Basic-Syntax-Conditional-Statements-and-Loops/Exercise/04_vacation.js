function solve(numberPeople, typeGroup, day) {
  let price = 0;
  let totalPrice = 0;
  switch (day) {
    case "Friday":
      if (typeGroup == "Students") {
        price = 8.45;
      } else if (typeGroup == "Business") {
        price = 10.9;
      } else if (typeGroup == "Regular") {
        price = 15;
      }
      break;
    case "Saturday":
      if (typeGroup == "Students") {
        price = 9.8;
      } else if (typeGroup == "Business") {
        price = 15.6;
      } else if (typeGroup == "Regular") {
        price = 20;
      }
      break;
    case "Sunday":
      if (typeGroup == "Students") {
        price = 10.46;
      } else if (typeGroup == "Business") {
        price = 16;
      } else if (typeGroup == "Regular") {
        price = 22.5;
      }
      break;
    default:
      break;
  }

  totalPrice = numberPeople * price;

  if (numberPeople >= 30 && typeGroup == "Students") {
    totalPrice = totalPrice - totalPrice * 0.15;
  } else if (numberPeople >= 100 && typeGroup == "Business") {
    totalPrice = totalPrice - price * 10;
  } else if (
    numberPeople >= 10 &&
    numberPeople <= 20 &&
    typeGroup == "Regular"
  ) {
    totalPrice = totalPrice - totalPrice * 0.05;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");
