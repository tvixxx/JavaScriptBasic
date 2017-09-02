'use strict';

let javascriptCodeFromUser = prompt('Пожалуйста, введите JavaScript код:');

function executeCode(code) {
	'use strict';

	try {
		eval(code);
	} catch(e) {
  		console.log(e, 'Возникла ошибка, напишите правильный код!');
	}
}

executeCode(javascriptCodeFromUser);
