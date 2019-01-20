function maxNum(numOne, numTwo, numThree) {
  let max = 0;
  if (numOne <= numTwo && numOne <= numThree) {
    max = numOne;
  } else if (numTwo <= numOne && numTwo <= numThree) {
    max = numTwo;
  } else if (numThree <= numOne && numThree <= numTwo) {
    max = numThree;
  }
  console.log(max);
}
maxNum(2, 5, 3);
