/* max and min with for */

const array = [1, 2, -5, 6, 12, 15, 128, -562, 31, 32132314, 562342341, 62341234, 6211, 342, -3213123, -541];

function maxSearchInArray (_array) {
  if (!_array) {
    return 0;
  }
  
  let max = 0;
  let arrayLength = _array.length;
  
  for (let i = 0; i < arrayLength; i++ ) {
   if (max < _array[i]) {
     max = array[i]; 
   }
  }
  return max;
}

function minSearchInArray (_array) {
   if (!_array) {
    return 0;
  }
  
  let min  = 0;
  let arrayLength = _array.length;
  
  for (let i = 0; i < arrayLength; i++ ) {
   if (min > _array[i]) {
     min = array[i];
   }
  }
  return min;
}

const maxValueInArray = maxSearchInArray(array);// 562342341
const minValueInArray = minSearchInArray(array); // -3213123

console.log('The max value in array is: ', maxValueInArray);
console.log('The min value in array is: ', minValueInArray);
