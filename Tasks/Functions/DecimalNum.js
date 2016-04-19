// Возвращение дробной части числа. С округлением для повышенной точности.

function getDecimal(num) {
  return num > 0 ? ( +(num % 1).toFixed(2) ) : (+(-num % 1).toFixed(2) );
}

alert(getDecimal(12.52));
alert(getDecimal(-1.2));
