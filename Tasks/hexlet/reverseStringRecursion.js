Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

Например:

import reverse from './reverse';

reverse('str');    // rts
reverse('hexlet'); // telxeh


** Решение **

const reverse = (str) => {
  const strLength = str.length;

  if (strLength < 1) {
    return str;
  }

  let lastLetter = str.substr(strLength - 1, strLength);
  let newStr = str.substr(0, strLength - 1);

  return lastLetter + reverse(newStr);
}
