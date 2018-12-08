let noOfSeries=100;
let first=0;
let second=1;
let answer=0;
let sum = 0;
let remainingNoOfSeries=noOfSeries-2;
for(let index=1; index<=remainingNoOfSeries; index++){
  answer=first+second;
  first=second;
  second=answer;
  if(answer%2==0){
    sum += answer;
  console.log(sum);
  }
  if(answer > 4000000){
    break;
  }
}
