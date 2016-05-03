// First method
var q = 0; // elems
var array = [1, 9, 3, 7, 5, 0, 2]; // our array
for (var i = 0; i < array.length; i++) {
    if (i % 2) { // if position is odd (1, 3, 5...)
        if (array[i] % 2) { // if value is odd
            q++; // increment q
        }
    }
}
alert(q);

// Second method
var q = 0;
var array = [1,9,3,7,5,0,2];

array.filter(function(valueElem, posElemInArray){
  if (posElemInArray % 2){
    if (valueElem % 2){
      q++;
    }
  }
});
alert(q);
