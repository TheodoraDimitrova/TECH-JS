function solve(array) {
  let res = [];
  for (let row of array) {
    let command = row.split(" ");

    if (command[0] == "Chat") {
      res.push(command[1]);
    } else if (command[0] == "Edit") {
      let replacementItem = command[2];
      let index = res.indexOf(command[1]);
      res = Object.assign([], res, { [index]: replacementItem });
    } else if (command[0] == "Delete") {
      let index = res.indexOf(command[1]);

      if (index !== -1) {
        res.splice(index, 1);
      }
    } else if (command[0] == "Pin") {
      
      let word = command[1];
      let remove = res.indexOf(word);

      res.splice(remove, 1);

      res.push(word);
    } else if (command[0] == "Spam") {
      let add = command.slice(1, command.length);
      for (let word of add) {
        res.push(word);
      }
    } else if (command[0] == "end") {
      break;
    }
  }
  console.log(res.join("\n"));
}
solve([
  "Chat John",
  "Spam Let's go to the zoo",
  "Edit zoo cinema",
  "Chat tonight",
  "Pin John",
  "end"
]);
