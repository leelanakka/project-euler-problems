/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:
1: 1
3: 1,3
6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/

const generateNthTriangleNo = function(n){
    let NthTriangleNo = n*(n+1)/2;
    return NthTriangleNo;
};
const noOfFactors = function(){
    for(let i = 5984; i > 0; i++) {
        let count = 0;
        let triangleNo = generateNthTriangleNo(i)
        for (let index = 1; index <= triangleNo; index++) {
            if(triangleNo%index == 0){
                count ++;
            }
        if(count >= 500){
            console.log(i);
            return triangleNo;
        }
    }
    };
    return;
};
console.log(noOfFactors())