function solve(numOne, numTwo, operation) {
    switch(operation) {
        case 'multiply':
         let multiply=(a,b)=>a*b;
         console.log(multiply(numOne,numTwo))
          break;
        case "divide":
        let divide=(a,b)=>a/b;
        console.log(divide(numOne,numTwo))
          break;
          case "add":
          let add=(a,b)=>a+b;
          console.log(add(numOne,numTwo))
          break;
        default:
        let sub=(a,b)=>a-b;
        console.log(sub(numOne,numTwo))
      }

}
solve(5, 5, "multiply");
