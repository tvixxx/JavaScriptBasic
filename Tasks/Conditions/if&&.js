/* First task */
/* && */
var age = 45;
if ( age <= 14 && age >= 90) {
alert ("your age is " + age);
} else {
alert("your age from 14 to 90" + " is " + age);
};

/* Second task */
/* && */
/* first method  with (!(condition))*/
var age = 45;
if (!(age >= 14 && age <=90)) {
alert("Yur value is low " + age);
} else {
alert("your value is upper: " + age);
}; 

/* second method with || */
var age = 13;
if ( age < 14 || age > 90) {
alert("Your age is below than 14 or above than 90 is:" + " " + age);
} else {
alert ("Your age is above than 14 or below than 90, is:" + " " + age);
};
