// a === array with numbers
// d === number, rotaion from left
// the task taken from hackerrank
function rotLeft(a, d) {
    let left = d;
    
    if (left > a.length) {
        left = left % a.length;
    }
    
    if (!left) {
        return a;
    }

    return a.slice(left, a.length).concat(a.slice(0, left));
}

console.log(rotLeft([1, 2, 3, 4, 5], 4)); // [5, 1, 2, 3, 4]
