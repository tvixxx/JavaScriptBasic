/* Check standart. First task */
/* First task */

var name = prompt ("Which true name of JavaScript?","");
if (name == "EcmaScript" ) {
   alert ("Yes,it's true!");
} else {
   alert ("u don't know? 'EcmaScript!'");
}

/* Get the number symbol. */
/* Second task */

var value = prompt("Please,enter the number...","");
if ( value > 0 ) {
   alert ( 1 );
} else if ( value < 0 ) {
   alert( -1 );
} else {
   alert ( 0 );
}

/*  Check login */
/* Third task */

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
	
	/* 'if' in '?' */
   /* Fourth task */
   
/* Base code  */
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
/* End base code */

/* Converted code */
var result = (a + b < 4) ? "less" : "More";


/* Fifth task */
/* 'if' in '?' */

/* Base code  */
var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
/* End Base code  */

/* Converted code */
var message = (login == 'Vasya') ? 'Hello' :
  (login == 'Director') ? 'Hello' :
  (login == '') ? 'Login is incorrect' :
  '';
}
