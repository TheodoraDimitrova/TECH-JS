function solve(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (Number(array[index]) % 2 == 0) {
      sum += Number(array[index]);
    }
  }
  console.log(sum);
}

solve(["1", "2", "3", "4", "5", "6"]);
