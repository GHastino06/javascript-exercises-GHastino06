const fibonacci = function(n) {
    let array=[1,1];
    let tmp;
    n=+n;
    if (n < 0) {
        return "OOPS";
    }else if (n === 0){
        return 0;
    }else if (n === 1 || n === 2) {
        return 1;
    }else {
        for(let i = 1 ;i < n-1; i++) {
            tmp= array[i]+ array[i-1];
            array.push(tmp);
        }
        return array[n-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
