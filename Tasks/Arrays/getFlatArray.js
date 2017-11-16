var arrayOfArrays = [[1], [2], [3], [4]];
var flatArr;

// ES6 method
flatArr = arrayOfArrays.reduce(function(a, b){
     return a.concat(b);
}, []);

// Basic method
flatArr = [].concat.apply([], arrayOfArrays);
