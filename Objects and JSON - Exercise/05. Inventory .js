function solve(array) {
  let res = [];
  for (let row of array) {
    let info = row.split(" / ");
    let name = info[0];
    let level = Number(info[1]);
    let items = info[2].split(", ");
    res.push({
      name: name,
      level: level,
      items: items
    });
  }
  console.log(JSON.stringify(res));
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara"
]);
