const removeFromArray = function(myArray, ...args) {
    let newArray = myArray.filter(x => !args.includes(x)); 
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
