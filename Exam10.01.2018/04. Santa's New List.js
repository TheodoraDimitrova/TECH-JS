function solve(array) {
  array.pop();

  let children = [];
  let presents = [];

  for (let row of array) {
    row = row.replace("->", " ");
    row = row.replace("->", " ");
    row = row.split(" "); //{childName}->{typeOfToy}->{amount}
    let childName = row[0];
    let typeOfToy = row[1];
    let amount = Number(row[2]);

    if (row[0] == "Remove") {
      children = children.filter(function(el) {
        return el.name != row[1];
      });
    } else {
      if (
        children.filter(function(e) {
          return e.name === childName;
        }).length > 0
      ) {
        for (let child of children) {
          if (child.name == childName) {
            child.countToys += amount;
          }
        }
      } else {
        let child = {
          name: childName,
          countToys: amount
        };
        children.push(child);
      }
      if (
        presents.filter(function(e) {
          return e.name === typeOfToy;
        }).length > 0
      ) {
        for (let pres of presents) {
          if (pres.name == typeOfToy) {
            pres.count += amount;
          }
        }
      } else {
        let present = {
          name: typeOfToy,
          count: amount
        };
        presents.push(present);
      }
    }
  }

  children.sort(function(a, b) {
    return b.countToys - a.countToys || a.name.localeCompare(b.name);
  });
  console.log("Children:");
  for (let i of children) {
    console.log(`${i.name} -> ${i.countToys}`);
  }

  console.log("Presents:");
  for (let i of presents) {
    console.log(`${i.name} -> ${i.count}`);
  }
}
solve([
  "Teddy->Clothes->8",
  "Johny->Toys->10",
  "Freddie->Candy->30",
  "Johny->Candy->20",
  "Carrie->Phone->1",
  "Carrie->Tablet->1",
  "Carrie->Candy->10",
  "Teddy->Toys->5",
  "Remove->Teddy",
  "END"
]);
