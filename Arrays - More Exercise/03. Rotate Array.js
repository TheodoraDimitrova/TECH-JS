function solve(array) {
  let times = Number(array[array.length - 1]);
  array.pop();
  while (times--) {
    let temp = array.pop();

    array.unshift(temp);
  }
  console.log(array.join(" "));
}
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
