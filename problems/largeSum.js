const fs = require('fs').readFileSync;
let result = 0;
let numbersList = fs('./50DigitNumbers.txt','utf-8');
let numbersArray = numbersList.split('\n');
for (let index = 0; index < numbersArray.length; index++) {
    result += (+numbersArray[index]);
}
console.log(result);
