// Test variable hoisting in js

var name = 'Peter';

function printAge() {
  var age = 19;
  
  console.log('Your age is: ' + age + ', ' + 'your name is: ' + name +'.');
  
  function sayYourNewData() {
    age = 20;
    name = 'P';
    lastName = 'SS';
  }
  
  sayYourNewData();
  console.log('Now, your age is: '  + age + ', ' + 'your name is: ' + name + ', your last name is: ' + lastName + '.');
}

printAge();

console.log(name); // global variable (changed in func 'sayYourNewData()'); will: 'p'
console.log(lastName); //global , without 'var', will: 'SS'
console.log(age); // local variable; will 'error'
