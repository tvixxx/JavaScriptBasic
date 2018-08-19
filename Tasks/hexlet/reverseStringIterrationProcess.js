Реализуйте функцию reverse, переворачивающую строку. В этот раз, используя итеративный процесс.

Ваша задача - реализовать внутреннюю рекурсивную функцию iter,
которая первым параметром принимает индекс текущего символа, а вторым - текущее значение аккумулятора.
Начальный вызов инициализируется значениями 0 для индекса и '' для аккумулятора.

** Решение **

const reverse = (str) => {
  const length = str.length;
  
  const iter = (index, acc) => {
    if (index > length - 1) {
      return acc;
    }

    const lastIndex = (length - 1) - index;
    const nextIndex = index + 1;
    const concatedStr = `${acc}${str[lastIndex]}`;

    return iter(nextIndex, concatedStr);
  }

  return iter(0, '');
};
