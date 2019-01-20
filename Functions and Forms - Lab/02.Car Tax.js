function solve(power, age) {
  let resPower = powerCalc(power);
  let resYears = yearsCalc(age);
  let res = resYears * resPower;

  function powerCalc(num) {
    let power = 0;
    if (num <= 37) {
      power = num * 0.43;
    } else if (num > 37 && num <= 55) {
      power = num * 0.5;
    } else if (num > 55.01 && num <= 74) {
      power = num * 0.68;
    } else if (num > 74.01 && num <= 110.0) {
      power = num * 1.38;
    } else {
      power = num * 1.54;
    }
    return power.toFixed(2);
  }
  function yearsCalc(years) {
    let coefficient = 0;
    if (years > 14) {
        coefficient=1.0;
    } else if (years > 5) {
        coefficient=1.50;
    
    } else {
        coefficient=2.80;
    }
    return coefficient;
  }

  console.log(res.toFixed(2) + " lv.");
}
solve(45, 10);
