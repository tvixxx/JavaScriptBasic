var dateFromStore = moment(new Date(2016, 4, 5)),
 		oneWeek = 7,
 		twoWeek = 14;

function getDaysLater(yourDate){
	
  var dateNow = moment(),
			dateFromStore = yourDate,
			diffResult = moment(dateNow).diff(moment(dateFromStore));
	
	console.log(diffResult);
	
	var intervalAsDays = Math.floor(moment.duration(diffResult).as('days'));
	console.log(intervalAsDays);
	
	if (intervalAsDays > 14){
		
		console.log('Прошло больше 2-ух недель');
	} else if (intervalAsDays  == 7) {
		
		console.log('Прошла неделя');
	} else if (intervalAsDays >= 7 && intervalAsDays <= 13) {
		
		console.log('Прошло больше недели')
	} else {
		
		console.log('Прошло несколько дней' + ' - ' + intervalAsDays);
	}
	
	return Math.floor(intervalAsDays);
}

getDaysLater(dateFromStore);
