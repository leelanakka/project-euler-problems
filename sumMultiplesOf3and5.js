const main = function(maximumNumber) {
let count = 0;
for(let index=3; index<maximumNumber; index++){
  if(index%3==0 || index%5==0){
    count += index;
  }
}
return count;
}
console.log(main(+process.argv[2]));
