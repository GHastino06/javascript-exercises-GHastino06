const sumAll = function(start, end) {
    let a = 0;
    if (start < 0 || Number.isInteger(start) == false || end < 0 || Number.isInteger(end) == false) {
        return 'ERROR';
    }else {
        if (start == end) {
        return start + end;
    }else if (start < end) {
        for(let i = start; i<=end ;i++) {
            a+=i;
        }
        return a;
    }else if (start > end) {
        for(let i = end; i<=start ;i++) {
            a+=i;
        }
        return a;
    }
    }
};

// Do not edit below this line
module.exports = sumAll;
