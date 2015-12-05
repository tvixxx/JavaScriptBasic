/* Task 1 */
/* Data type - from "audacity" to "Udacity" */

/* first method */
var s = "audacity";

var udacityizer = function(s) {  
    s = s.slice(2).replace("dacity","Udacity");
    return s;
};

console.log(udacityizer(s));

/* Second method */
var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);
