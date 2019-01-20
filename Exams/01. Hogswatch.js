function solve(array) {
  array = array.map(Number);
  let homesToVisit = array.shift();//5
  let startPresets = array.shift();//10
  let times = 0;
  let extra = 0;

  for (let home = 0; home < array.length; home++) {
    if (array[home] <= startPresets) {
      startPresets -= array[home];
    } else {
      let need = array[home] - startPresets;

      let take = (homesToVisit / home + 1) * (homesToVisit - home + 1) + need;
      console.log(take);
      startPresets = take;
      startPresets -= need;
      times += 1;
      extra += take;
    }
  }
  if (times == 0) {
    console.log(times);
  } else {
    console.log(times);
    console.log(extra);
  }
}
solve(["5", "10", "4", "5", "3", "4", "5"]);
