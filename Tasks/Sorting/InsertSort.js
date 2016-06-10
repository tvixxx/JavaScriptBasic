var sortArr = [6, 12, 99, 2, 1, 23, 78, 75, 32, 12, 56];

console.log(sortArr);

var temp;

for (var i = 0; i < sortArr.length; i++){
  
  temp = sortArr[i];
  for (var j = i - 1; (j >= 0) && sortArr[j] > temp; j--){
    
    sortArr[j+1] = sortArr[j];
  }

  sortArr[j+1] = temp;
}

for (var i = 0; i < sortArr.length; i++){
  
 console.log(sortArr[i]);
}
