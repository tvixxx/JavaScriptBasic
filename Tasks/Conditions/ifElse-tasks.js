/* First task */
/* Check standart*/

var name = prompt ("Which true name of JavaScript?","");
if (name == "EcmaScript" ) {
   alert ("Yes,it's true!");
} else {
   alert ("u don't know? 'EcmaScript!'");
}

/* Second task */
/* Get the number symbol. */

var value = prompt("Please,enter the number...","");
if ( value > 0 ) {
   alert ( 1 );
} else if ( value < 0 ) {
   alert( -1 );
} else {
   alert ( 0 );
}

/* Third task */
/*  Check login */

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
	

/* Fourth task */	
/* 'if' in '?' */
   
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

/* Six task */
/* If , else if , swtich */ 

/* base code */
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

/* finale */
var browser = prompt("Enter the your browser","");
if (browser == "IE") {
    alert("Oh! u're browser is: IE");
}
else if (browser == "Chrome"
        || browser == "Firefox"
        || browser == "Safari"
        || browser == "Opera" ) {
    alert("These browsere we too supported!");
} else {
    alert("We are hope , all it's good!");
}
