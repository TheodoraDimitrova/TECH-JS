function solve(num){
    let number=num;
    sum = 0;

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    
    if(sum.toString().includes(9)){
        console.log(`${number} Amazing? True`)
    }else{
        console.log(`${number} Amazing? False`)
    }
}
solve(1233)