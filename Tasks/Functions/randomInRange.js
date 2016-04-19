function getNumberInMaxRange(maxNumberRange) {
  var number = maxNumberRange;
   return ( (Math.random() * max).toFixed(1) );
}

var numb = 10;
console.log(getNumberInMaxRange(numb));

//
function getNumberInMinMaxRange(minNumberRange, maxNumberRange) {
   var maxNumber = maxNumberRange;
   var minNumber = minNumberRange;
   return (minNumber + Math.random() * (maxNumber - minNumber )).toFixed(1);
}

var numbMax = 15;
var numbMin = 9;
console.log(getNumberInMinMaxRange(numbMin, numbMax));
