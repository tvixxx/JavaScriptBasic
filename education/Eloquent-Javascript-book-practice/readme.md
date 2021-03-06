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

## Глава №6 - Структуры данных: объекты и массивы
### Задача №7 - Сумма диапазона
**Условие**: 
Во введении был упомянут удобный способ подсчёта сумм диапазонов чисел:

```js
console.log(sum(range(1, 10)));
```

Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который содержит все числа из него, включая начальное и конечное.

Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.

В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

```js
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
```

**Решение:**
```js  
function range(start, finish){
  var array = [];
  var standartIterator = 1;
  var iteration = arguments[2] || standartIterator;
  var i, j;
  
  if (iteration > 0) {
    for (i = start; i <= finish; i += iteration) {
      array.push(i);
    }
  } 
  
  if (iteration < 0) {
    for (j = start; j >= finish; j += iteration) {
      array.push(j);
    }
  }
  
  return array;
}

function sum(array) {
  
  var result = 0;
  
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  
  return result;
}

console.log('range from 1 to 10: ' + range(1, 10));
console.log('range from 5 to 2 with iteration is -1: ' + range(5, 2, -1));
console.log('ragne from 1 to 10 with sum numbers: ' + sum(range(1, 10)));
```

**Вывод:**
```js
"range from 1 to 10: 1,2,3,4,5,6,7,8,9,10"
"range from 5 to 2 with iteration is -1: 5,4,3,2"
"ragne from 1 to 10 with sum numbers: 55"
```

### Задача №8 - Обращаем вспять массив
**Условие**: 
У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный. В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

Если иметь в виду побочные эффекты и чистые функции из предыдущей главы, какой из вариантов вам кажется более полезным? Какой более эффективным?

```js
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

**Решение:**
```js  
function reverseArray(arr) {
  var inputArray = arr;
  var outputArray = [];
  var inputArrayLength = inputArray.length;
  var i = 0; 
  
  for (i; i < inputArrayLength; i++) {
    outputArray[i] = inputArray.pop();
  }
  
  return outputArray;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));


function reverseArrayInPlace(arr) {
  var oldArray = [];
  var inputArrayLength = arr.length;
  var i = 0;
  
  for (i; i < Math.floor(inputArrayLength/2); i++) {
    oldArray = arr[i];
    arr[i] = arr[inputArrayLength - 1 - i];
    arr[inputArrayLength - 1 - i] = oldArray;
  }
  
  return arr;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
```

**Вывод:**
```js
["C", "B", "A"]
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
[5, 4, 3, 2, 1]
```

### Задача №9 - Список
**Условие**: 
Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся структура – список (не путайте с массивом). Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.

```js
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную. Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.

Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента.+

Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.

```js
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
```


**Решение:**
```js  
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function arrayToList(arr) {
  var list = null;
  
  for (var i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  
  return list;
}

function prepend(val, list) {
  var result = {
    value: val,
    rest: list
  }
  
  return result;
}

function listToArray(list) {
  
  var result = [];
  
  while (list !== null) {
    
    result.push(list.value);
    list = list.rest;
  }
  
  return result;
}

function nth(list, index) {
  
  if (!list || index < 0) {
    return undefined;
  }
  
  return index === 0 ? list.value : nth(list.rest, index - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(list, prepend(2)));
console.log(nth(list, 1));
```

**Вывод:**
```js
[object Object] {
  rest: [object Object] {
    rest: null,
    value: 20
  },
  value: 10
}
[10, 20, 30]
[object Object] {
  rest: [object Object] {
    rest: undefined,
    value: 2
  },
  value: [object Object] {
    rest: [object Object] { ... },
    value: 1
  }
}
2
```
