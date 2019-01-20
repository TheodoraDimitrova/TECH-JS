function solve(array) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      if (res.includes(array[i])) {
        continue;
      } else {
        res.push(array[i]);
      }
    }
  }

  res.push(array[array.length - 1]);
  console.log(res.join(" "));
}

