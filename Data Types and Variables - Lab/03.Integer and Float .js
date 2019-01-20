function solve(firstNum, SecondNum, thirdNum) {
  let sum = firstNum + SecondNum + thirdNum;

  sum % 1 === 0 ? (sum += " - Integer") : (sum += " - Float");
  console.log(sum)
}

solve(9, 100, 1.1);
