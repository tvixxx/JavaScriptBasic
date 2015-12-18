/* test new material about Method in JavaScript and this */

function print(data) {
	console.log(data);
};

var user = { //create object with some property
	"name": "John", //property name
	"age": 25, // property age
	"admin": true, //property admin
	say: function(word) { // create the anonymous function , call on his key 'say'
		print(word + " from " + this.name + " " + this.age + " \n admin:" + this.admin); // 'print'='console.log'
		//output the our word, 'this' tells us to point to the object itself, inside!
	}
};
user.say("hello"); // output the our data
