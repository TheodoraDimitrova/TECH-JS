function solve(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "add") {
      res.push(i + 1);
    } else if (array[i] == "remove") {
      res.pop();
    }
  }
  if (res.length > 0) {
    console.log(res.join(" "));
  } else {
    console.log("Empty");
  }
}
solve(["remove", "remove", "remove"]);
