function solve(array) {
  array.sort(function(a, b) {
    return a-b;
  });
  let res = [];
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 == 0) {
        res.push(array.pop())
    } else {
        res.push(array.shift())
    }
  }
  console.log(res.join(" "));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18,49]);
