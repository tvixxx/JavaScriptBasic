/* Task 1 */
/* get first name the lower case except first symbol and get last name the upper case */

/* First method */
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    oldName = [];
    for (var i = 0; i < oldName.length; i++) {
        console.log(oldName + " " + "length is: " + oldName.length);
        oldName[i] = finalName[i];
    }
    var strSplit = finalName.split(" ");
    console.log(strSplit);
    

    strSplit[1] = strSplit[1].toUpperCase();
    strSplit[0] = strSplit[0].slice(0,1).toUpperCase() + strSplit[0].slice(1).toLowerCase();
    finalName = strSplit.join(" ");
    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


/* Second method */
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    
    
     var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));