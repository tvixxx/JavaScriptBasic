Напишите и экспортируйте функции car и cdr, основываясь на реализации функции cons:

const cons = (x, y) => f => f(x, y);

При таком определении как выше, пара будет представлять из себя функцию f => f(x, y). Например:

const pair = cons(5, 3);
// const pair = f => f(5, 3);


** Решение: **

const car = (pair) => pair((x, y) => x);

const cdr = (pair) => pair((x, y) => y);
