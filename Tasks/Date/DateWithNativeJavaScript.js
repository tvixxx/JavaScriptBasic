var dateFromStorage = new Date(2016, 3, 1);

function getDaysToday(yourDate) {
	var dayMillSec = 86400000;
  var dateNow = new Date();
	console.log(dateNow);

  // создать объект из текущей даты, без часов-минут-секунд
  var dateFromStorage = yourDate;
	console.log(dateFromStorage);

  var diff = (dateNow - dateFromStorage) / dayMillSec; // разница в миллисекундах
  return Math.floor(diff); // перевести в секунды
}

if (+getDaysToday(dateFromStorage) > 14) {
	console.log('Прошло 2 недели');
} else if (+getDaysToday(dateFromStorage) > 7) {
	console.log('Прошла неделя');
} else {
	console.log('Прошло несколько дней');
}
