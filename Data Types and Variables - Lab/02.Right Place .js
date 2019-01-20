function solve(string1, char, string2) {
 
  let res=string1.replace('_', char);
 
  if(res==string2){
      console.log('Matched')
  }else{
      console.log('Not Matched')
  }
}
solve("Str_ng", "i", "String");
