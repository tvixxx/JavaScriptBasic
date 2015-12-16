/* Determination Global scope and Local scope */

/* Mine function for console.log */
function print(data) {
	console.log(data);
};

/* first test */

// Our global variables
var x = "X"; 
var y = "Y";

//Our global function with local variables and local 'inner' function
function outer() { // Global function with local variables
	var x = "x"; // initialize new 'local' variable "x"
	print("x: " + x); // x
	print("y: " + y); // Y
	y = "y"; // присвоение "y"
 	function inner (z) { //Local function with her local variables
		var y = "_y"; // init 'local' y
		print("x: " + x); // x
		print("y: " + y); // _y
		print("z: " + z); // z - the 'local' argument for this function
	};
	inner("z"); // call the inner 'local' function
};

outer(); //call our global function 
print("x: " + x);// X
print("y: " + y);// y - "lowercase" because, in outer function, her 'local' variable "y" was initialized as 'y = "y";'

/* Second test */
var y = 0; // initialized and assigned the zero
function foo(x){ 
	var y = 1; //we can determine localy for our global function here OR  
	if(x) {
		// y = 1; // we can determine localy for our global function here
		//bacause - without determine 'var y = 1;' we get 'undefined' for our call the function!
		print(y);
	} else {
		var y = 2; // the 'local' variable for body else
		print(y);
	};
};
foo(true);
