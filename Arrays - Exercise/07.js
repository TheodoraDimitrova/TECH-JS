function solve(array) {
  let arr = array[0].split(" ");

  let counter = 1;
  let num;
  let prev = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      counter++;
      num = arr[i];
    } else {
      if (counter > prev) {
          console.log(counter)
        prev = counter;
        num = arr[i-1];
        counter = 1;
      } else {
        counter = 1;
      }
    }
  }
  console.log((num+" ").repeat(prev));
}
solve(["1 1 1 2 3 1 3 3"]);

