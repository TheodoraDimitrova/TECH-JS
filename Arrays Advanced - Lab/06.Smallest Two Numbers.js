function solve(arr) {
  let sortedAscending = arr.sort((a, b) => {
    return a - b;
  });

  console.log(sortedAscending.slice(0, 2).join(" "));
}
solve([30, 15, 50, 5]);
