function solve(n,array){
    let newArray=array.slice(0, n)
    console.log(newArray.reverse().join(" "))
}
solve(3, [10, 20, 30, 40, 50])