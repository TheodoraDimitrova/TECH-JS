function solve(array) {
  let wagons = array.shift();
  let maxCapacity = array.shift();

  wagons = wagons.split(" ").map(Number);

  for (const command of array) {
    if (command.includes("Add")) {
      let wagon = command.split(" ");
      wagons.push(Number(wagon[1]));
    } else {
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + Number(command) <= maxCapacity) {
           
          wagons[i] += Number(command);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
solve(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
