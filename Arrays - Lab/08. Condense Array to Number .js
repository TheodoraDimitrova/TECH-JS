function solve(array) {
  while (array.length > 1) {
    let res = [];
    for (let i = 0; i < array.length - 1; i++) {
      res[i] = array[i] + array[i + 1];
    }

    array = res;
  }

  console.log(array[0]);
}
solve([2, 10, 3]);
