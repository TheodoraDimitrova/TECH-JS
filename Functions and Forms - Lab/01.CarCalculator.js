function solve(num){
    let power=0;
    if(num<=37){
        power=num*0.43;
    }else if(num>37 && num<=55){
        power=num*0.50;
    }else if(num>55.01 && num<=74){
        power=num*0.68;
    }else if(num>74.01 && num<= 110.00 ){
        power=num*1.38;
    }else{
        power=num*1.54
    }
    console.log(power.toFixed(2)+" lv.")
}