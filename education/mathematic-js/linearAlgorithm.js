// Find the name in array using phone number.
// First method
var target = '511-789';
var arr1 = [
  ['Дима', '511-123'],
  ['Петя', '511-456'],
  ['Андрей', '511-789'],
  ['Кирилл', '511-000']
];
var arrLength = arr1.length;
var steps = 0;
var result = null;
var phoneIndex = 1;
var nameIndex = 0;

for (var j = 0; j < arrLength; j++) {
  
  if (arr1[j][phoneIndex] !== target) {
    steps += 1;
    continue;
  }
  
  result = arr1[j][nameIndex];
}

if (!result) {
  console.log('The name is not found!');
}

console.log('The name is: ', result); // 'Андрей'
console.log('Count of steps is: ', steps); // 3

// Second method
var target = '511-789';
var arr1 = [
  ['Дима', '511-123'],
  ['Петя', '511-456'],
  ['Андрей', '511-789'],
  ['Кирилл', '511-000']
];

var result = arr1.filter(function(item) {
  return item[1] === target;
});

console.log(result[0][0]);
