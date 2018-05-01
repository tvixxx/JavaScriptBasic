const arrayOfArrays = [[1], [2], [3], [4]];

const flatArr = arrayOfArrays.reduce((a, b) => a.concat(b), []);

// Basic method
const flatArr = [].concat.apply([], arrayOfArrays);
