function solve(size){
    let cuts=0;
    do {
        size/=2
        cuts++;
    } while (size>=1);
    console.log(`Length is ${size.toFixed(2)} cm. after ${cuts} cuts.`);

}
solve(1000);