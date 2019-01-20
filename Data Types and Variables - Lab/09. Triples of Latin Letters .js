function solve(n) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < n; i++) {
    
    
    for (let sec= 0; sec < n; sec++) {
      
      
      for (let x = 0; x < n; x++) {
       
        console.log(`${alphabet[i]}${alphabet[sec]}${alphabet[x]}`);
       
        
        
      }
    }
   
  }

}
solve(3);
