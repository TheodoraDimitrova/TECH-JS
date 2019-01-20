function solve(arr1, arr2) {
  for (let index = 0; index < arr1.length; index++) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[index] === arr2[i]) {
        console.log(arr1[index]);
      }
    }
  }
}
solve(
  ["Hey", "hello", 2, 4, "Pesho", "e"],
  ["Pecho", 10, "hey", 4, "hello", "2"]
);
