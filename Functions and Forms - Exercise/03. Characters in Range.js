function solve(char1, char2) {
  let startCode = char1.charCodeAt(0);
  let endCode = char2.charCodeAt(0);
  let res = "";

  let start = Math.min(startCode, endCode);
  let max = Math.max(startCode, endCode);

  for (let i = start + 1; i < max; i++) {
    res += String.fromCharCode(i)+" ";
  }
  console.log(res);
}
solve("C", "#");
