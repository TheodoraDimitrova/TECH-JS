function solve(array) {
  let sumOdds = 0;
  let sumEvens = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
      sumOdds += array[index];
    } else {
      sumEvens += array[index];
    }
  }
  let res=sumOdds-sumEvens;
  console.log(res)
}
solve([1, 2, 3, 4, 5, 6]);
