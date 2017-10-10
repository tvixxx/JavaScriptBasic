// Задача: необходимо повторить букву, стояющую перед числом, столько раз, сколько число из себя представляет.
// Пример: 34D6F - вывести букву D - 34 раза, букву F - 6 раз;

var a = "34D6FKKN";
// var a = '12faaaa12k4bbbb';
var str = "";
var tempStr = "";

var temp;
var number = '';

for (var i = 0; i < a.length; i++) {
  var isNumber = !isNaN(parseInt(a[i]));
  var isNextNumber = isNumber &&  !isNaN(parseInt(a[i+1]));
  var isString = isNaN(parseInt(a[i]));
  var isNextString = isNaN(parseInt(a[i+1]));
  
  if (isNumber) {
    number += a[i];
    
    if (isNextNumber) {
      continue;
    }
    
    if (isNextString) {
      continue;
    }
  }
  
  temp = 0;
  
  if (isString) {
    while( temp <= (!isNumber && number !== '' ? parseInt(number, 10) : 0) ) {
      tempStr += a[i];
      temp++;
    }
    
    resetData();
    str = tempStr;
    continue;
  }
  
  tempStr += a[i];
  resetData();
  str = tempStr;
}

function resetData() {
  temp = 0;
  number = '';
}

console.log(str);
