function solve(num) {
  for (let index = 1; index <= num; index++) {
    if (
      ((index - 1) % 9) + 1 == 5 ||
      ((index - 1) % 9) + 1 == 7 ||
      ((index - 1) % 9) + 1 == 11
    ) {
      console.log(index + " -> True");
    } else {
      console.log(index + " -> False");
    }
  }
}
solve(0);
