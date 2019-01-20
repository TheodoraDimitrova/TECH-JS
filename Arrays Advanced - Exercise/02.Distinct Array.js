function solve(array) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  let unique = array.filter(onlyUnique);
  console.log(unique.join(" "));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
