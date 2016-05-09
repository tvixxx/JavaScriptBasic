var dateFromStorage = new Date(2016, 3, 1);

function getDaysLater(yourDate){
	
	var day = 86400000; // milliseconds in one day
  var now = new Date(); // create new date - today
	
  var dateFromStorage = yourDate;

  var diff = (now - dateFromStorage) / day; // difference between dates
	
  return Math.floor(diff); // round through Math.floor
}

if (getDaysLater(dateFromStorage) > 14) {
	console.log('Прошло 2 недели');
} else if (getDaysLater(dateFromStorage) > 7) {
	console.log('Прошла неделя');
} else {
	console.log('Прошло несколько дней');
}
