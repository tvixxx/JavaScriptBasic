Выразительный JavaScript (Eloquent Javascript)
===================

Здесь хранятся все практические задания по мере прохождения книги. 

### Задача №1 - Треугольник в цикле
**Условие:**  
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

**Решение:**
```js  
  var calls = 7;
  var triangle = '';
  
  for (var i = 0; i < calls; i++) {
    triangle += '#';
    console.log(triangle);
  }
```
**Вывод:**
> "#"  
  "##"  
  "###"  
  "####"  
  "#####"  
  "######"  
  "#######"  

### Задача №2 - FizzBuzz
**Условие**:  
Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.

**Решение:**
```js  
const fizz = 'Fizz';
const buzz = 'Buzz';

for (var i = 1; i < 100; i++ ) {
  
  if ( (i % 3 === 0) && (i % 5 === 0) )   {
    console.log('i: ' + i + ' phrase is: ' + fizz + buzz);
  } else if (i % 3 === 0) {
    console.log('i: ' + i + ' phrase is: ' + fizz);
  } else if (i % 5 === 0) {
     console.log('i: ' + i + ' phrase is: ' + buzz);
  } 
}
```
**Вывод:**
> "i: 3 phrase is: Fizz"  
"i: 5 phrase is: Buzz"  
"i: 6 phrase is: Fizz"  
"i: 9 phrase is: Fizz"  
"i: 10 phrase is: Buzz"  
"i: 12 phrase is: Fizz"  
"i: 15 phrase is: FizzBuzz"  
"i: 18 phrase is: Fizz"  
"i: 20 phrase is: Buzz"  
"i: 21 phrase is: Fizz"  
"i: 24 phrase is: Fizz"  
"i: 25 phrase is: Buzz"  
"i: 27 phrase is: Fizz"  
"i: 30 phrase is: FizzBuzz"  
"i: 33 phrase is: Fizz"  
"i: 35 phrase is: Buzz"  
"i: 36 phrase is: Fizz"  
"i: 39 phrase is: Fizz"  
"i: 40 phrase is: Buzz"  
"i: 42 phrase is: Fizz"  
"i: 45 phrase is: FizzBuzz"  
"i: 48 phrase is: Fizz"  
"i: 50 phrase is: Buzz"  
"i: 51 phrase is: Fizz"  
"i: 54 phrase is: Fizz"  
"i: 55 phrase is: Buzz"  
"i: 57 phrase is: Fizz"  
"i: 60 phrase is: FizzBuzz"  
"i: 63 phrase is: Fizz"  
"i: 65 phrase is: Buzz"  
"i: 66 phrase is: Fizz"  
"i: 69 phrase is: Fizz"  
"i: 70 phrase is: Buzz"  
"i: 72 phrase is: Fizz"  
"i: 75 phrase is: FizzBuzz"  
"i: 78 phrase is: Fizz"  
"i: 80 phrase is: Buzz"  
"i: 81 phrase is: Fizz"  
"i: 84 phrase is: Fizz"  
"i: 85 phrase is: Buzz"  
"i: 87 phrase is: Fizz"  
"i: 90 phrase is: FizzBuzz"  
"i: 93 phrase is: Fizz"  
"i: 95 phrase is: Buzz"  
"i: 96 phrase is: Fizz"  
"i: 99 phrase is: Fizz"    

### Задача №3 - Шахматная доска
**Условие**:  
Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.  
Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера.

**Решение:**
```js  
var checkboardLength = parseInt(prompt('Введите длину шахматной доски: ', 0));
var checkboard = '\n';

if (!isNaN(checkboardLength)) {
  for (var i = 0; i < checkboardLength; i++) { 
    if (i % 2 === 0) {
      checkboard += '# # # #\n';
    } else {
      checkboard += ' # # # #\n';
    }
  }
} else {
  console.log('Вы ввели не верное число, введите пожалуйста число!');
}

console.log(checkboard);
```
**Вывод:**
>
"  
# # # #  
 # # # #  
# # # #  
 # # # #  
# # # #  
 # # # #  
# # # #   
 # # # #  
"  
