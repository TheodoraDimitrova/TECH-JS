function solve(array, arr) {
  let bomb = arr[0];
  let radius = arr[1];

  function findBomb(element) {
    return element == bomb;
  }


  console.log(arrayyy.includes(bomb));
  while (array.includes(bomb)) {
    let index = array.findIndex(findBomb);
    console.log(index)
    console.log(radius)
    for (let i = index - 1; i >= index - radius; i--) {
      console.log(array.splice(i, 1) + "hj");
    }

    array.splice(index, radius + 1);

    console.log(array);
  }
  
}
solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
