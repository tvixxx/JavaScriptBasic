const arr = [1, 2, 3, 7, 9, -1, 8, 0, 1, 4];
const sum = 8;

// first solution
function findPairs(arr, sum) {
  const arrLen = arr.length;
  const result = [];
  let hashMap = new Map();

  for (let i = 0; i < arrLen; i++) {
    if (hashMap.has(arr[i])) {
      result.push([hashMap.get(arr[i]), arr[i]]);
    } else {
      hashMap.set(sum - arr[i], arr[i]);
      hashMap.set(arr[i], sum - arr[i]);
    }
  }

  return result;
}

// second solution
function findPairs(arr, sum) {
  let addedIndexes = [];

  return arr.reduce((acc, num, i) => {
    for (let j = i + 1; j < arr.length; j++) {
      const tempSum = num + arr[j];
      const areIndexesAdded = addedIndexes.includes(i)
        && addedIndexes.includes(j);

      if (tempSum === sum && !areIndexesAdded) {
        acc.push([num, arr[j]]);
        addedIndexes = [...addedIndexes, i, j];
      }
    }
    
    return acc;
  }, []);
}



console.log(findPairs(arr, sum)) // [[1,7], [1,7], [8,0], [9,-1]]
