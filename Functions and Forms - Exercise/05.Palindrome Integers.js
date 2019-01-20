function solve(array) {
  array.forEach(element => {
    element=element.toString().split("");
  
      let isPalindrome = element.join("") === element.reverse().join("");
    console.log(isPalindrome);
  });
}
solve([123, 323, 421, 121]);
