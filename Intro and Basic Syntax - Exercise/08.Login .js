function solve(array) {
    
  let password = array[0];
  for (let index = 1; index < array.length; index++) {
    if (
      password ==
      array[index]
        .split("")
        .reverse()
        .join("")
    ) {
      console.log(`User ${password} logged in.`);
    } else if (password == array[index]) {
      continue;
    } else if (password != array[index]) {
      console.log("Incorrect password. Try again.");
    }
  }
 array.shift();
  

    if(array.includes(password)){
      console.log(`User ${password} blocked!`)
    }
}
solve(["sunny","sunny"]);
