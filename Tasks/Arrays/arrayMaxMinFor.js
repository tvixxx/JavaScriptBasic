/* max and min with for */

array = [1,2,-5,6,12,15,128,-562,31,32132314,562342341,62341234,6211,342,-3213123,-541];

function maxSearchInArray (_array) {
  var max = 0;
  for (i = 0; i < _array.length; i++ ) {
   if (max < _array[i]) {
     max = array[i]; 
   }
  }
  return max;
}

function minSearchInArray (_array) {
  var min  = 0;
  for (i = 0; i < _array.length; i++ ) {
   if (min > _array[i]) {
     min = array[i];
   }
  }
  return min;
}
minSearchInArray(_array) {
  var min  = 0;
  for (i = 0; i < _array.length; i++ ) {
   if (min > _array[i]) {
     min = array[i];
   }
  }
  return min;
}

maxSearchInArray(array);// 562342341
minSearchInArray(array); // -3213123
