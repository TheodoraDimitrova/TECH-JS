function solve(str) {
  function longer(champ, contender) {
    return contender.length > champ.length ? contender : champ;
  }

  function longestWord(str) {
    var words = str.split(" ");
    return words.reduce(longer);
  }
  function shorter(champ, contender) {
    return contender.length < champ.length ? contender : champ;
  }

  function shorterWord(str) {
    var words = str.split(" ");
    return words.reduce(shorter);
  }
  console.log("Longest -> "+ longestWord(str));
  console.log("Shortest -> "+ shorterWord(str))
}
solve(
  "Hello people, are you familiar with the terms of application at the software university?"
);
