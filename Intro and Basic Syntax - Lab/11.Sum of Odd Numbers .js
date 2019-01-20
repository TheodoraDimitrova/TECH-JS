function solve(num) {
  let sum = 0;
  for (let index = 1, count=1; index < 100; index++) {
      if(count<=num){
        if (index % 2 != 0) {
            console.log(index);
            sum += index;
            count++;
          }
      }else{
          break;

      }
   
    
  }
  console.log("Sum: " + sum);
}
solve(3);
