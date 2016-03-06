var greeting;
var newCustomer = true; // or u can use the `newCustomer = false` 

if(newCustomer) {
  greeting = function () {
    alert('Thanks for visiting the Badlands!');
  };
} else {
  greeting = function () {
    alert('Welcome back to the Badlands!');
  };
}

closeTerminal(greeting);

function closeTerminal (message) {
  message();
}
