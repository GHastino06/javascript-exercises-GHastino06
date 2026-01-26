const palindromes = function (str) {
    let temp = "";
    let check = true;
    let punctuation =['?','!',',','.'];
    temp = str;
    //cleaning the string
    punctuation.forEach(element => {
        temp = temp.replaceAll(element,"");
    });
    temp = temp.toLowerCase();
    temp = temp.replaceAll(" ","");
    //
    for(let i=0, j=temp.length-1; i < j; i++,j--) {
        if (temp.charAt(i)!= temp.charAt(j)){
            check = false;
            break;
        }
    }
    return check;
};

// Do not edit below this line
module.exports = palindromes;
