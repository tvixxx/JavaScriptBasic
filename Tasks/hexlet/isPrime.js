const isPrime = (num) => {
  const isNumEqualOne = num === 1;
  let resultCounter = 2;

  if (isNumEqualOne) {
    return false;
  }

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      resultCounter--;
    }
    continue;
  }

  return resultCounter === 0;
}

export default isPrime;
