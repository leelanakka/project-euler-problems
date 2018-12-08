const isPalindrome = function(string){
  return string == string.split("").reverse().join("");
}

const palindromeProduct = function(){
  let result = [];
  for(let i = 100; i <1000  ; i ++){
    for(let index = 100; index <1000  ; index++){
      let product = i*index;
      if(isPalindrome(""+product)){
        result.push(product);
      }
    }
  }
  return Math.max.apply(null,result);
}
console.log(palindromeProduct());
