
// Решение через цикл for
(function() {
  var height = 6;
  var goal = 0;

  for (var i = 0; i < height; i++) {
     goal = 2 * goal + 1;
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
