function solve(array) {
  let n = array.shift();

  let totalBoxes = 0;

  for (let row = 0; row < array.length; row += 3) {
    let flour = Number(array[row]);
    let sugar = Number(array[row + 1]);
    let cacao = Number(array[row + 2]);

    let flourCups = parseInt(flour / 140);
    let sugarSpoons = parseInt(sugar / 20);
    let cocoaSpoons = parseInt(cacao / 10);

    if (flourCups <= 0 || sugarSpoons <= 0 || cocoaSpoons <= 0) {
      console.log("Ingredients are not enough for a box of cookies.");
      continue;
    }

    let totalCokeBake = Math.floor(
      ((140 + 10 + 20) * Math.min(flourCups, sugarSpoons, cocoaSpoons)) / 25
    );

    totalBoxes += Math.floor(totalCokeBake / 5);
    console.log(`Boxes of cookies: ${Math.floor(totalCokeBake / 5)}`);
  }
  console.log("Total boxes: " + totalBoxes);
}
solve(["2", "200", "300", "500", "100", "200", "50"]);
