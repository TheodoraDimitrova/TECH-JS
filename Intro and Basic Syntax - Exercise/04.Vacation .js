function solve(count, group, day) {
  let totalPrice = 0;
  let price = 0;
  if (group == "Students") {
    if (day == "Friday") {
      price = 8.45;
    } else if (day == "Saturday") {
      price = 9.8;
    } else if (day == "Sunday") {
      price = 10.46;
    }
  } else if (group == "Business") {
    if (day == "Friday") {
      price = 10.9;
    } else if (day == "Saturday") {
      price = 15.6;
    } else if (day == "Sunday") {
      price = 16;
    }
  } else if (group == "Regular") {
    if (day == "Friday") {
      price = 15;
    } else if (day == "Saturday") {
      price = 20;
    } else if (day == "Sunday") {
      price = 22.5;
    }
  }

  totalPrice = count * price;
  if (group == "Students" && count >= 30) {
    totalPrice = totalPrice- (totalPrice/100)*15;
  } else if (group == "Business" && count >= 100) {
    totalPrice = totalPrice - 10 * price;
  } else if (group == "Regular" && (count >= 10 && count < 20)) {
    totalPrice = totalPrice - (totalPrice/100)*5;
  }
  console.log('Total price: '+totalPrice.toFixed(2));
}

solve(40,
    "Regular",
    "Saturday"
    );
