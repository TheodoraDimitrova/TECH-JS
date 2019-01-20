function solve(array) {
    let sumLeft = 0;
    let sumRight = 0;
  for (let i = 0; i < array.length; i++) {
    sumLeft=0;
    sumRight=0;

    for (let left = i-1 ; left >= 0; left--) {
      sumLeft += array[left];
    }

    for (let right = i+1; right < array.length; right++) {
      sumRight += array[right];
    }

    if (sumLeft==sumRight){
        console.log(i)
        return;
       
    }

  }

  if (sumLeft!=sumRight){
   
        console.log("no")
        
  }
}

solve([1, 2,3,3]);
