function solve(array) {
  let sort = array.pop().split(" ")[1];

  array.pop();
  let res = [];
  for (let row of array) {
    if (row.includes("dislike")) {
      let video = row.split(":")[1];
      for (let movie of res) {
        if (movie.name == video) {
          movie.likes -= 1;
        }
      }
    } else if (row.includes("like")) {
      let video = row.split(":")[1];
      for (let movie of res) {
        if (movie.name == video) {
          movie.likes += 1;
        }
      }
    } else {
      row = row.split("-");
      let name = row[0];
      let views = Number(row[1]);
      let obj = {
        name: name,
        views: views,
        likes: 0
      };

      if (
        res.filter(function(e) {
          return e.name === name;
        }).length > 0
      ) {
        for (let movie of res) {
          if (movie.name == name) {
            movie.views += Number(views);
          }
        }
      } else {
        res.push(obj);
      }
    }
  }

  if (sort == "likes") {
    res.sort((a, b) => b.likes - a.likes);
  } else {
    res.sort((a, b) => b.views - a.views);
  }

  for (let i of res) {
    console.log(`${i.name} - ${i.views} views - ${i.likes} likes`);
  }
}
solve([
  "Eninem Venom-500",
  "like:Eninem Venom",
  "Funny Cats-700",
  "like:Funny Cats",
  "like:Funny Cats",
  "Eninem Venom-300",
  "stats time",
  "by likes"
]);
