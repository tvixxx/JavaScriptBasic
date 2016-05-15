1)
var toString = function(arg) {

  return new String(arg + arg);
};

console.log(typeof +toString(['Hello', 'World!'])); // ??                                                        
_________________________________________________________

2)
var log = function(message){

  if (typeof message !== 'string'){
  
    return new TypeError('function log should recieve a string');
  }
  
  return message;
};

console.log(typeof log(10)); // ??
_________________________________________________________

3)
var sum = function(a, b){
  
  return this.sum + a + b;
};

console.log(typeof sum()); // ??
_________________________________________________________

4)
var num = 10;

if (function func(){}){

  num += typeof func;
}

console.log(num); // ??
_________________________________________________________

5)
var i;

for (i = 0; i < 5; i++){

  setTimeout(function(){
  
    i++;
  }, 0);
}

console.log(i); // ??
_________________________________________________________

6)
var i;

for (i = 0; i < 5; i++){

  setTimeout(function(){
  
    i++;
  }, 1000);
}

console.log(i); // ??
_________________________________________________________

7)
var a = 1;

function f(){

  window.test = a;
  var a = 2;
}

f(); // ??
_________________________________________________________

8)
(function(){
  'use strict';

  var test = parseFloat('string 2') === parseFloat('string 2');
})();
_________________________________________________________

9)
(function (){
  'use strict';
  
  var num = 3;
  
  num += '2';
  num = +num;
  
  console.log(num); // ??
})();

_________________________________________________________



































ANSWERS:
1) Number - cos NaN is number
2) Object - cos *new*
3) String
4) 10undefined - cos, 
5) 5
6) 5 - no matter what time, u can check it with 100000
7) undefined - cos, hoisting
8) false - cos, we got NaN. NaN equal NaN - false =)
9) 32 - is Number
