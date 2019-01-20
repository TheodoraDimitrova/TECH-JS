function solve(array) {
  array.pop();
  let res = [];

  for (let row of array) {
    row = row.replace(":", " ");
    row = row.replace("->", " ");
    row = row.split(" ");
    let townName = row[0];
    let time = row[1];
    let passengersCount = row[2];

    if (
      res.filter(function(e) {
        return e.townName === townName;
      }).length > 0
    ) {
  
      if (time == "ambush") {
        for (let train of res) {
          if (train.townName == townName) {
       
            train.time = 0;
            train.passengersCount -= Number(passengersCount);
          }
        }
      } else {
        for (let train of res) {
          if (train.townName == townName) {
            train.passengersCount += Number(passengersCount);
           
            if (train.time > time) {
              train.time = time;
            }else if(train.time==0){
                train.time=time
            }
          }
        }
      }
    } else {
   
      if (time == "ambush") {
        continue;
      } else {
        let obj = {
          townName: townName,
          time: Number(time),
          passengersCount: Number(passengersCount)
        };
        res.push(obj);
      }
    }
  }
  res.sort(function (a, b) {
    return a.time - b.time || a.townName.localeCompare(b.townName) 
});




  for (let i of res) {
    if(i.time!=0 && i.passengersCount!=0){
        console.log(`${i.townName} -> Time: ${i.time} -> Passengers: ${i.passengersCount}`)
    }
  }
}
solve([
  "Quirm:12->258",
  "Ankh-Morpork:ambush->200",
  "Ankh-Morpork:3->143",
  "Sto-Lat:4->80",
  "Ankh-Morpork:4->143",
  "Ankh-Morpork:ambush->143",
  "Sto-Lat:3->20",
  "Ankh-Morpork:5->17",
  "Slide rule"
]);
