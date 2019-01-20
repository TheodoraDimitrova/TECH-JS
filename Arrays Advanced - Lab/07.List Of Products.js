function solve(array) {
  let res = array.sort();
  for (let i = 0; i < res.length; i++) {
    console.log(`${i + 1}.${res[i]}`);
  }
}
solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);
