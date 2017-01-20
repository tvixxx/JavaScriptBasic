Выразительный JavaScript (Eloquent Javascript)
===================

Здесь хранятся все практические задания по мере прохождения книги. 

## Глава №3 - Структура программ
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
```
  "#"  
  "##"  
  "###"  
  "####"  
  "#####"  
  "######"  
  "#######"  
```

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
```
"i: 3 phrase is: Fizz"  
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
```

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
```
# # # #  
 # # # #  
# # # #  
 # # # #  
# # # #  
 # # # #  
# # # #   
 # # # #  
```

## Глава №4 - Функции
### Задача №4 - Минимум
**Условие**:  
Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

**Решение:**
```js  
function min(a,b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10));
console.log(min(0, -10));
```

**Вывод:**
```js
0
-10
```

### Задача №5 - Рекурсия
**Условие**:  
Мы видели, что оператор % (остаток от деления) может использоваться для определения того, чётное ли число ( % 2). А вот ещё один способ определения:
- Ноль чётный.
- Единица нечётная.
- У любого числа N чётность такая же, как у N - 2.  
Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.
Потестируйте её на 50 и 75. Попробуйте задать ей -1.

**Решение:**
```js  
function isEven(number) {
  
  if (Math.abs(number) === 0) {
    return true;
  } else if (Math.abs(number) === 1) {
    return false;
  } else {
    return isEven(Math.abs(number-2));
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
```
**Вывод:**
```js
true
false
false
```

### Задача №6 - Считаем бобы
**Условие**:  
Символ номер N строки можно получить, добавив к ней .charAt(N) ( "строчка".charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, "к"). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length - 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.  

Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.

Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.

**Решение:**
```js  
function countBs(str) {
  var counter = 0;
  
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] === 'B') {
      counter++;
    }
  }
  
  return counter;
}

console.log('B: ' + countBs('BBBc'));

function countChar(str, char) {
  
  var counter = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    }
  }
  
  return counter;
}

console.log('the amount of your char: ' + countChar('aaabcde', 'a'));

```
**Вывод:**
```js
"B: 3"
"the amount of your char: 3"
```

