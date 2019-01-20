function solve(input) {
  input = input.map(Number);
  let totalDays = input.shift();
  let users = input.shift();
  
  let res = 0;

  for (let i = 1; i <= users; i++) {
    let moneyPerSearch = input[0]
    if (input[i] > 5) {
      continue;
    }

    if (input[i] == 1) {
      moneyPerSearch *= 2;
    }
    if (i == 3) {
      res += moneyPerSearch * totalDays * 3;
    } else {
      res += moneyPerSearch * totalDays;
    }
  }

  console.log(`Total money earned for ${totalDays} days: ` + res.toFixed(2));
}
solve(["10", "3", "6", "1", "1", "7"]);
