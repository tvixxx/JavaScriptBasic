// concat method
// inArr - main arr, which concatination with another arr

//First decision
const arr1 = [1,2,3];
const arr2 = [4,5,6];

function concatenationTwoArrays(destinationArr, sourceArr) {
  const arrayLength = sourceArr.length;
  
  for (let i = 0; i < arrayLength; i++) {
    destinationArr.push(sourceArr[i]);
  }
  return destinationArr;
}

console.log(concatenationTwoArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6];

//Second decision
const arr1 = [1,2,3];
const arr2 = [4,5,6];

Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6];
