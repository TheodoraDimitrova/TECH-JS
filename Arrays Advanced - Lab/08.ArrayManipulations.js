function solve(array) {
  let arr = array
    .shift()
    .split(" ")
    .map(Number);
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    if (command[0] == "Add") {
      add(command[1]);
    } else if (command[0] == "Remove") {
      remove(command[1]);
    } else if (command[0] == "RemoveAt") {
       removeAt(command[1]);
    } else if (command[0] == "Insert") {
      insert(command[1],command[2])
    }
  }

  function add(num) {
    arr.push(Number(num));
  }
  function remove(num) {
    arr=arr.filter(e => e !==Number(num));
  }
  function removeAt(index){
      arr.splice(Number(index),1)
  }
  function insert(num,index){
    arr.splice(Number(index), 0, Number(num));
  }
 console.log(arr.join(" "));
}
solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
