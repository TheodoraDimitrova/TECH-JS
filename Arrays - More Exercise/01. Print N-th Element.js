function solve(array) {
  let n = Number(array[array.length - 1]);
  let res = [];
  for (let i = 0; i < array.length - 1; i += n) {
  
    res.push(array[i]);
  }
  console.log(res.join(" "));
}
solve(["5", "20", "31", "4", "20", "2"]);
