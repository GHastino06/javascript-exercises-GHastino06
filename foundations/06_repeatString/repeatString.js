const repeatString = function(word,times) {
    let i=0;
    let str='';
    if (times < 0){
        return 'ERROR';
    }else {
        for(i;i<times;i++){
        str+= word;
        }
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
