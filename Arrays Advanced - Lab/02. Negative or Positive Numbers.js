function solve(arr){
    let res=[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<0){
          res.unshift(arr[i])
        }else{
            res.push(arr[i])
        }
        
    }
    console.log(res.join("\n"))
}
solve([7, -2, 8, 9])