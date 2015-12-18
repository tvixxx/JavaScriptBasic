/* Task - create objects with method fibonacci and try it to right work */

function print(data) {
	console.log(data);
};


var fibNumb = { // create object with
    fibonacci : function(n) { // method fibonacci with
        if (n === 0 || n === 1) { // our condition
            return n;
        }
        else {
            return this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
        };
    }
};
var n = 10; // set the value for test our method
print(fibNumb.fibonacci(n)); // output the data
