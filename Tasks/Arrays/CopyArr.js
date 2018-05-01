const original = [true, true, undefined, false, null];

// Array.prototype.slice.call (using call for pseudo arrays or if our "array" doesn't have slice method)
const copy0 = Array.prototype.slice.call(original, 0);
console.log(copy0); // [true, true, undefined, false, null]

//slice
const copy1 = original.slice(0);
console.log(copy1); // [true, true, undefined, false, null]

//spread operator
const copy2 = [...original];
console.log(copy2); // [true, true, undefined, false, null]

//deep copying
let deepArray = [["freeTest"]];

let deepCopy = JSON.parse(JSON.stringify(deepArray));

console.log(deepCopy); // [["freeTest"]]

deepCopy[0].push('is deep');

console.log(deepCopy); // [["freeTest", "is deep"]]
