function solve(num) {
  let firstChar = "%".repeat(num / 10);
  let secoundChar = ".".repeat((100 - num) / 10);
  if (num < 100) {
    console.log(`${num}% [${firstChar}${secoundChar}]`);
    console.log("Still loading...");
  }else{
      console.log('100% Complete!');
      console.log('[%%%%%%%%%%]');
  }
}
solve(100);
