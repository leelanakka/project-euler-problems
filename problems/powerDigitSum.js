const bigInt = require("big-integer");

const sum = function(num1, num2) {
  return +num1 + +num2;
};

const powerOfANumber = function(base, power) {
  let powerObject = bigInt(base).pow(power);
  return powerObject.value.join("");
};

const sumPowerDigits = function() {
  let power = powerOfANumber(2, 1000).split("");
  return power.reduce(sum);
};

console.log(sumPowerDigits());
