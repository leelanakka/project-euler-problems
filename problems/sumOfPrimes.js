const isPrime = function(number){
    let sqrtnumber=Math.floor(Math.sqrt(number));
    let prime = number != 1;
    for(let index = 2; index < sqrtnumber+1 ; index++) { 
        if(number % index == 0) {
            prime = false;
            break;
        }
    }
    return prime;
};
const sumOfPrimes = function(limit){
    let result = 0;
    for(let i = 2; i <= limit; i++){
        if(isPrime(i)){
            result += i;
        }
    }
    return result;
};
console.log(sumOfPrimes(+process.argv[2]));
