Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2

Результат: 2

** Решение **
export default (num) => {
  if (num === 0) {
    return 0;
  }
  
  const sumNumbersIter = (num, acc) => {
    const strNum = num.toString();
  
    if (strNum.length === 1) {
      return num;
    }

    for (let i = 0; i <= strNum.length - 1; i++) {
      acc += parseInt(strNum[i]);
    }

    return sumNumbersIter(acc, 0);
  }

  return sumNumbersIter(num, 0);
}
