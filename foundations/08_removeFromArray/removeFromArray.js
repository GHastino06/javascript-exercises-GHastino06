const removeFromArray = function(myArray, ...args) {
    let newArray = myArray.filter(item => !args.includes(item)); 
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
