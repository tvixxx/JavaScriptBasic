Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.

Примеры использования:
isPalindrome('radar'); // => true
isPalindrome('a');     // => true
isPalindrome('abs');   // => false

** Решение **
const isPalindrome = (str) => {
  if (str.length < 2) {
    return true;
  }

  const lastSymbol = str.length - 1;

  if (str[0] === str[lastSymbol]) {
    const newStr = str.substr(1, lastSymbol - 1); 
    return isPalindrome(newStr);
  }

  return false;
}

export default isPalindrome;
