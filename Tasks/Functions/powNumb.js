/* Task 1 - exp to */

function powNumb (x,exp) {
	var result = x;

	for ( i = 1; i < exp; i++) {
		result *= x;
	};
	return result;
};

var x = prompt ("Enter the number x?: ", "");
var exp = prompt ("Enter the exp for number x: ", "");

	if ( exp <= 1) {
		alert("This exponential doesn't suppoerted! Please, enter exp more than 1");
	} else {
		alert(powNumb(x,exp));
	};

