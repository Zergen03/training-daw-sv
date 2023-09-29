const assert = require('assert').strict;

function nextPairs(value) {
    var array;
    if(value % 2 == 0){
        array = [value - 2, value + 2]
    }else{
        array = [value - 1, value + 1]
    }
    return array
}

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])