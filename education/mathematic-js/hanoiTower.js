
// using for cycle
(function() {
  var height = 6; // Height of tower (hardcoded number)
  var goal = 0; // default count of decisions

  for (var i = 0; i < height; i++) {
     goal = 2 * goal + 1; // formula from a book *конкретная математика*
  }
  
  console.log(`The goal has ${goal} decision(s)`);
}
)();



// Using recursion
function recursion(height) {
  if (height === 0) {
	return 0;  	
  } else {
  	return 2 * recursion(height - 1) + 1;
  }
}

console.log(recursion(3));
