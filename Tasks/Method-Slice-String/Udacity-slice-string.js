/* Task 1 */
/* Data type - from "audacity" to "Udacity" */

var s = "audacity";

var udacityizer = function(s) {  
    s = s.slice(2).replace("dacity","Udacity");
    return s;
};

console.log(udacityizer(s));
