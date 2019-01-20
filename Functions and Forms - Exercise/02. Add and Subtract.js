function solve(num1, num2, num3) {
  let resSum = sum(num1, num2);
  let res = subtract(resSum, num3);
  function sum(num1, num2) {
    return num1 + num2;
  }
  function subtract(sum, num) {
    return sum - num;
  }
  console.log(res);
}
solve(23, 6, 10);
