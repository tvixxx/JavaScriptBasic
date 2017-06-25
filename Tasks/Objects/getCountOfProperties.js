let user = {
  age: 30,
  name: 'Maks',
  male: true,
  sayHi: function() {
    console.log('Hello');
  }
}

function getCountOfProperties(obj) {
  let sumOfFields = 0;
  
  for (let field in obj) {
    sumOfFields += 1;
  }
  
  return sumOfFields;
}

console.log(getCountOfProperties(user));
