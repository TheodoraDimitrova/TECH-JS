function solve(array) {
  let res = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
      res[index] = array[index] + index;
    } else {
      res[index] = array[index] - index;
    }
  }
  console.log(res);
  console.log(array.reduce((a, b) => a + b, 0))
  console.log(res.reduce((a, b) => a + b, 0))
}
solve([5, 15, 23, 56, 35]);
