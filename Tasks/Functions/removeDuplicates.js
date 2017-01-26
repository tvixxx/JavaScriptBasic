//Условие:**
//Напишите функцию removeDuplicates, которая принимает строку и удаляет все одинаковые символы, в том случае, если они идут друг за другом.

//Решение:
function removeDublicate(str) {
  var newStr = '';
  var tempStr = '';
  
  for (var i = 0; i < str.length; i++) {
    if ( str[i] === tempStr) {
      continue;
    }
    
    tempStr = str[i];
    newStr += tempStr;
  }
  
  return newStr;
}

let test1 = 'Hellllllllooooo';
let test2= 'jsssssss';
let test3= 'tessstttttt';
        
console.log(removeDublicate(test1));
console.log(removeDublicate(test2));
console.log(removeDublicate(test3));


//Вывод:
//"Helo"
//"js"
//"test"

