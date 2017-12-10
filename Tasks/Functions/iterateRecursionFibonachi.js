const factorial = (n) => {
  
  const iter = (current, acc) => {
    if (current === 0) {
      return acc;
    }
    return iter(current - 1, acc * current);
  };
  
  return iter(n, 1);
}

console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
