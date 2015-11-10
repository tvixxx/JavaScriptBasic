*/  Check login */

var who = prompt ("Who are you?","");
	if (who == "Admin") {
		var pass = prompt("Pass?","");
			if (pass == "Black Lord") {
				alert("WELCOME MY LORD!");
			} else if (pass == null) {
				alert ("Login canceled!");
			} else {
				alert("Pass is not correct!")
			}
	} else if (who == null) {
		alert ("Login canceled");
	} else  { 
		alert ("I don't know you!");
	}
