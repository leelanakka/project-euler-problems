let number = 36;
let factors = [];
let answer = 0;
for(let index=2; index<number; index++){
  if(number%index == 0 && index%2 !=0){
    factors.push(index);
  }
}
limit = factors.length-1;

for(let index=0; index<=limit; index++){
  answer = factors[index];
  for(let j=2; j<=factors[index]; j++){
    if(factors[index]%j == 0){
      answer = "";
      break
    }
  }
  console.log(answer);
}console.log(answer);

