function solve(array) {
  let guests = [];
  for (const input of array) {
    if (input.includes("not")) {
        let b=input.split(" ");
        let notGoing=b[0];
        if(guests.includes(notGoing)){
            let index = guests.indexOf(notGoing);
             guests.splice(index, 1);
        }else{
            console.log(notGoing + " is not in the list!")
        }
    }else{
        let a=input.split(" ");
        let name=a[0]
        if(guests.includes(name)){
            console.log(name+' is already in the list!')
        }else{
            guests.push(name)
        }
       
    }
  }
  console.log(guests.join("\n"))
}
solve([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!"
]);
