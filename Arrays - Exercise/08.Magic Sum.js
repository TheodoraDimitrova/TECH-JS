function solve(array) {
  let arr = array[0].split(" ");
  let sum = array[1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[i]) + Number(arr[j]) == sum) {
        console.log(arr[i] + " " + arr[j]);
      }
    }
  }
}
solve(["1 7 6 2 19 23", "8"]);
