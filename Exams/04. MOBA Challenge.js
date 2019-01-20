function solve(array){

    for (let row of array) {
     row= row.split("-> ")
     console.log(row)
    }


}
solve([ 'Pesho -> Adc -> 400',
'Gosho -> Jungle -> 300',
'Stamat -> Mid -> 200',
'Stamat -> Support -> 250',
'Season end' ])