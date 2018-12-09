/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
const isPythagoreanTriplet = function(a,b,c){
    return ((a*a)+(b*b))==(c*c);
};

const specialTripletProduct = function(limit){
    for (let a = 1; a < limit; a++) {
        for(let b = a+1; b < limit; b++){
            let c = 1000-(b+a);
            if(isPythagoreanTriplet(a,b,c)){
                return a*b*c;
            }
        }
        
    }
};
console.log(specialTripletProduct(+process.argv[2]));