/* Task 1 */
/* Search the last index of array and increased by one */

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];

    for (var i = 0; i < _array.length; i++) {
        console.log(_array + " " + "Your length is: " + _array.length);
        newArray[i] = _array[i];
    }
        var lastPop = newArray.pop();
        console.log(lastPop);
        
        lastPop += 1;
        console.log("lastPop is upper to: " + lastPop);
        
        newArray.push(lastPop);
        console.log(newArray);
    // Don't delete this line!
    return newArray;
};
console.log(incrementLastArrayElement(sampleArray));
