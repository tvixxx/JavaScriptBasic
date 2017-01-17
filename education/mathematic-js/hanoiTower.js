
// Решение через цикл for
(function() {
  var height = 6; // Высота башни (захардкоженное число)
  var goal = 0; // изначальное кол-во решений

  for (var i = 0; i < height; i++) {
     goal = 2 * goal + 1; // формула из учебника *конкретная математика?
  }
  
  console.log(`Задача имеет ${goal} решений`);
}
)();



// Решение через рекурсию
function recursion(height) {
  
  if (height == 0) {
	return 0;  	
  } else {
  	return 2 * recursion(height - 1) + 1;
  }
}

console.log(recursion(3));
