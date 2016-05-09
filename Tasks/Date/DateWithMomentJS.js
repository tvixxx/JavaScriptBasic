var oneWeek = 7;
var twoWeek = 14;

var dateFromStore = moment(new Date(2016, 3, 2));

function getSecondsToday(yourDate) {
  var dateNow = moment();
	
  var dateFromStore = yourDate;
	var dateFromStoreDiffResult = moment(dateNow).diff(moment(dateFromStore));
	console.log(dateFromStoreDiffResult);
	var intervalAsDays = Math.floor(moment.duration(dateFromStoreDiffResult).as('days'));
	console.log(intervalAsDays);
	
	if (+intervalAsDays > 14) {
		console.log('Прошло 2 недели');
	} else if (+intervalAsDays > 7) {
		console.log('Прошла неделя');
	} else {
		console.log('Прошло несколько дней');
	}
	return Math.floor(intervalAsDays);
}

getSecondsToday(dateFromStore);
