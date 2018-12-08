/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
const smallestMultiple = function(){
  for(let index = 20; index <= index ; index+=20){
    for(let i = 2; i< 21  ; i++){
      if(index%i != 0 ){
        break;
      }
      if(i==20){
        return index;
      }
    }
  }
}
console.log(smallestMultiple());
