// concat method
// inArr - main arr, which concatination with another arr

//First decision
var arr1 = [1,2,3];
var arr2 = [4,5,6];

function concatenationTwoArrays(inArr, sourceArr) {
  var i = 0;
  var arrLength = sourceArr.length;
  
  for (i; i < arrLength; i++) {
    inArr.push(sourceArr[i]);
  }
  
  return inArr;
}

console.log(concatenationTwoArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6];

//Second decision
var arr1 = [1,2,3];
var arr2 = [4,5,6];

Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6];
