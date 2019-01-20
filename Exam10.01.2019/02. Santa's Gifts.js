function solve(arr) {
  arr.shift();
  let array = arr.shift();
  let commands = arr;
  array = array.split(" ").map(Number);

  let santaPosition = 0;

  for (let com of commands) {
    let command = com.split(" ");

    if (command[0] == "Forward") {
      let steps = Number(command[1]);
     
      if (steps >= 0 && steps <= array.length - 1) {
        if (steps + santaPosition >= 0 && steps + santaPosition <= array.length - 1) {
          array.splice(steps + santaPosition, 1);
          santaPosition += steps;
        }
      }
    } else if (command[0] == "Back") {
      let givenIndex = Number(command[1]);
      if (givenIndex >= 0 && givenIndex <= array.length - 1) {
        array.splice(santaPosition - givenIndex, 1);
        santaPosition = santaPosition - givenIndex;
      }
    } else if (command[0] == "Gift") {
      let index = Number(command[1]);

      if (index >= 0 && index <= array.length - 1) {
        let houseNum = Number(command[2]);
        array.splice(index, 0, houseNum);
        santaPosition = index;
      }
    } else if (command[0] == "Swap") {
      let swapArrayElements = function(arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
      };

      let firstNum = Number(command[1]);
      let secondNum = Number(command[2]);
      if (array.includes(firstNum) && array.includes(secondNum)) {
        swapArrayElements(
          array,
          array.indexOf(firstNum),
          array.indexOf(secondNum)
        );
      }
    }
  }
  console.log("Position: " + santaPosition);
  if (array.length > 0) {
    console.log(array.join(", "));
  }
}
// solve([
//   "5",
//   "255 500 54 78 98 24 30 47 69 58",
//   "Forward 1",
//   "Swap 54 47",
//   "Gift 1 20",
//   "Back 1",
//   "Forward 3"
// ]);
solve([ '6',
'50 40 25 63 78 54 66 77 24 87',
'Forward 4',
'Back 3',
'Forward 3',
'Gift 2 88',
'Swap 50 87',
'Forward 1' ])