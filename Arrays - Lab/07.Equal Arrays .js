function solve(arr1, arr2) {
  let a = arr1.map(Number);
  let b = arr2.map(Number);
  
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]){
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        return;
    } 
    
  }
  console.log(`Arrays are identical. Sum: ${b.reduce((a, b) => a + b, 0)}`)
 
}

solve(['1','2','3','4','5'], ['1','2','4','4','5']);
