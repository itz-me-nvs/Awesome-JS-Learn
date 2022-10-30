function isRepeats(substring) {
    var map = new Map();
    for (let i = 0; i < substring.length; i++) { // o(n)
        if (map.has(substring[i])) { // o(1)
            return true;
        }
        map.set(substring[i]);
    }
    return false;
}


function substring(str) {
    console.time('process')
    var LongestLength = 0;
    for (let i = 0; i < str.length; i++) { // o(n)
        for (let j = i; j < str.length; j++) { // o(n)
            let sub = str.substring(i, j + 1); // o(n)
            if (!isRepeats(sub)) {
                LongestLength = Math.max(LongestLength, sub.length)
            }
        }
    }
    // finially O(1 + n)^4 ~ o (n)^4
    console.timeEnd('process')
    return LongestLength
}

console.log(substring('dfdc'));