// selection sorting (сортировка выбором)

function selectionSort(arr) {
  var newArr = [];
  var smallest;

  while (arr.length > 0) {
    smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1));
  }

  return newArr;
}


function findSmallest(arr) {
  var smallest = arr[0];
  var smallestIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  
  return smallestIndex;
}

console.log(selectionSort([5, 3, 6, 2, 10, 1, 7, 45, 52, 99, 106, 9]));
