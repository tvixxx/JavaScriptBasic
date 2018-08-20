Реализуйте и экспортируйте по умолчанию функцию partialApply.
Эта функция умеет частично применять один (второй) аргумент у переданной функции:

** Решение **

const partialApply = (fn, arg1) => arg2 => fn(arg2, arg1); 

Примеры использования:

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
f1(1); // => 1
f1(10); // => 100

const f2 = partialApply((a, b) => a * b, 5);
f2(2); // => 10
f2(5); // => 25
