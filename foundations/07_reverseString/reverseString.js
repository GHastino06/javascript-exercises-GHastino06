const reverseString = function(word) {
    let b = "";
    let str = String(word);
    let bruh = str.length;
    for (let i = bruh; i >= 0; i--){
         b+= str.charAt(i);
    }
    return b;
};

// Do not edit below this line
module.exports = reverseString;
