function solve(distance ,passengers ,price){
    let neededMoney=(((distance/100)*7)+((passengers*100)/1000))*price;
    console.log(`Needed money for that trip is ${neededMoney}lv.`)
}
solve(260, 9, 2.49);