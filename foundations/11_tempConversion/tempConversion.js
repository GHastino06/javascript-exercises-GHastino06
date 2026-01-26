const convertToCelsius = function(n) {
  let result= +((n - 32)* 5/9).toFixed(1);
  return result;
};

const convertToFahrenheit = function(n) {
  let result = +((n * 9/5) + 32).toFixed(1);
  return result;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
