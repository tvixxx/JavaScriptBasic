var original = [true, true, undefined, false, null];

//slice
var copy1 = original.slice(0);
console.log(copy1); // [true, true, undefined, false, null]

//spread operator
var copy2 = [...original];
console.log(copy2); // [true, true, undefined, false, null]

//deep copying
var deepArray = [["freeTest"]];

var deepCopy = JSON.parse(JSON.stringify(deepArray));

console.log(deepCopy); // [["freeTest"]]

deepCopy[0].push('is deep');

console.log(deepCopy); // [["freeTest", "is deep"]]
