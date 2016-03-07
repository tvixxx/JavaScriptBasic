var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function (arrayCell){
	var string;
  string = arrayCell[0] + ' ' + arrayCell[1];
  return string;
});

console.log(modifiedNames); // modifiedNames
                         // ["Thomas Meeks", "Gregg Pollack", "Christine Wong", "Dan McGaw"]
