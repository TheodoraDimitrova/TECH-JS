function solve(start,end){
    let sum=0;
    let numbers="";
    for (let index = start; index <= end; index++) {
        numbers+=index+" "
       sum+=index
        
    }
    console.log(numbers)
    console.log('Sum: '+sum)
}
solve(5,10)