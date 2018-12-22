/*
*The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

const collatzCount = function () {
    let count = 0;
    let num = 0
    let answer;
    for (let index = 999999; index >= 0; index--) {
        let i = index;
        while (i> 1) {
            if (isEven(i)) {
                i = i/2;
            } else {
                i = 3 * i+1;
            }
            count++
        }
        if(count>num){
            num = count;
            answer = index;
        }
        count = 0;
    }
    return answer;
};

const isEven = function (number) {
    return number % 2 == 0;
};

console.log(collatzCount());