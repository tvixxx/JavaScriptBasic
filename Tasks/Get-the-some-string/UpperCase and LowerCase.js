/* Task 1 */
/* get first name the lower case except first symbol and get last name the upper case */

/* First method */
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;

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
    
    return finalName;
};


/* Third method */
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    oldName = [];
    for (var i = 0; i < oldName.length; i++) {
        console.log(oldName + " " + "length is: " + oldName.length);
        oldName[i] = finalName[i];
    }
    var strSplit = finalName.split(" ");
    console.log(strSplit);
    
    var firstName =  strSplit[0].slice(0,1).toUpperCase() + strSplit[0].slice(1).toLowerCase();
    var lastName = strSplit[1].toUpperCase();
    console.log("Your finale name is: " + firstName + " " + lastName);
    
    finalName = firstName + ' ' + lastName;
    

    return finalName;
};

console.log(nameChanger(name));



/* Second method */
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {

    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;

};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


