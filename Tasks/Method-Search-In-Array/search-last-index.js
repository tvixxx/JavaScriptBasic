/* Task 1 */
/* Search the last index of array and increased by one */

const sampleArray = [0,0,7];

const incrementLastArrayElement = (_array) => {
    if (!_array) {
        return;
    }
    
    let tempArray = [];

    for (let i = 0; i < _array.length; i++) {
        tempArray[i] = _array[i];
    }
   
    let lastEl = tempArray.pop();
    lastEl += 1;
    tempArray.push(lastEl);
    return tempArray;
};
console.log(incrementLastArrayElement(sampleArray));


/* Second method - through the *slice* */
function incrementLastArrayElement(_array)  {
    if (!_array) {
        return;
    }
    
    let newArray = _array.slice(0);
    const lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}


/* Third mehotd */
const array = [0,0,7];

function getLastIndexUp(_array) {
    if (!_array) {
        return;
    }
    
   let lastIndex = _array.pop();
   _array.push(lastIndex + 1);
   return _array;
};

getLastIndexUp(array); //[0, 0, 8]
