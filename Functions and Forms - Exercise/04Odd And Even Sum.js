function solve(num) {
  let oddSum = 0;
  let evenSum = 0;
  let string = num.toString().split("");
  string.forEach(element => {
    if (element % 2 == 0) {
        evenSum += Number(element);
     
    } else {
        oddSum += Number(element);
    }
  });
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
solve(1000435);
