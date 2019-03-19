
function MyClass(){
  this.a = 'test';
}

var a = new MyClass()
var b = MyClass();

console.log(a); // not undefined. Will print object with property 'a' equal to 'test';
console.log(b); // undefined
