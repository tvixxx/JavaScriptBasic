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
