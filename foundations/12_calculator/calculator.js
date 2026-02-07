const add = function(n1,n2) {
	return n1+n2;
};

const subtract = function(n1,n2) {
	return n1-n2;
};

const sum = function(numbers=[]) {
	/*let sum=0;
  numbers.forEach(element => {
    sum+=element;
  });
  return sum;*/
  return numbers.reduce((total,current) => total + current,0);
};

const multiply = function(numbers=[]) {
  /*let mul=1;
  numbers.forEach(element => {
    mul*=element;
  });
  return mul;*/
  return numbers.reduce((total, current) => total*current ,1);
};

const power = function(n1,n2) {
  return n1**n2;
};

const factorial = function(n) {
  if(n === 0 || n ===1){
    return 1;
  }else {
    let result = 1;
  // Multiply numbers from 2 to n.
    for (let i = 2; i <= n; i++) {
      result *= i; // result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
