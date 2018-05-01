// First method
let q = 0; // elems
const array = [1, 9, 3, 7, 5, 0, 2]; // our array
const arrayLength = array.length;
for (let i = 0; i < arrayLength; i++) {
    if ((i % 2) && (array[i] % 2)) { // if position is odd (1, 3, 5...)
       q++; // increment q
    }
}
console.log(q);

// Second method
let q = 0;
const array = [1,9,3,7,5,0,2];

array.forEach((valueElem, posElemInArray){
  if (posElemInArray % 2 && valueElem % 2){
    q++;
  }
});
console.log(q);
