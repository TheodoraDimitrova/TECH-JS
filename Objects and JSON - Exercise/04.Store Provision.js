function solve(array) {
  let firstArr = array[0];
  let secondArr = array[1];

  let obj = {};
  for (let i = 0; i < firstArr.length; i += 2) {
    obj[firstArr[i]] =Number(firstArr[i + 1]);
  }
  for (let y = 0; y < secondArr.length; y += 2) {
    if (obj.hasOwnProperty(secondArr[y])) {
    obj[secondArr[y]] += Number(secondArr[y + 1]);
    } else {
      obj[secondArr[y]] =Number(secondArr[y + 1]);
    }
  }
  console.log(obj);
}
solve([
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
]);
