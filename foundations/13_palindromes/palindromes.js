const palindromes = function (str="") {
    let check = true;
    let punctuation =['?','!',',','.'];
    //cleaning the string
    punctuation.forEach(element => {
        str = str.replaceAll(element,"");
    });
    str = str.toLowerCase();
    str = str.replaceAll(" ","");
    //
    for(let i=0, j=str.length-1; i < j; i++,j--) {
        if (str.charAt(i)!= str.charAt(j)){
            check = false;
            break;
        }
    }
    return check;
};

// Do not edit below this line
module.exports = palindromes;
