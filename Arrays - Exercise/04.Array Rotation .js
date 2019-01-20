function solve(array, rotations) {
  for (let i = 1; i <= rotations; i++) {
    array.push(array[i - 1]);

  }
  array.splice(0, rotations)
  console.log(array.join(" "))
}
solve([51, 47, 32, 61, 21], 2);
