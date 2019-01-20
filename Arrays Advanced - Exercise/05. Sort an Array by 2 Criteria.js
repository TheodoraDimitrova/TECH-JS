function solve(arr){

    console.log(arr.sort(sortByTwoCriteria).join('\n'))

    function sortByTwoCriteria(a,b){
        let lenA=a.length;
        let lenB=b.length;
        let res=lenA-lenB;
        if(res==00){
           return a.localeCompare(b)      
          }
          return res;
    }


}
solve(["alpha", "beta", "gamma"])