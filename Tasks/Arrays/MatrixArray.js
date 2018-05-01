// With jQuery

var table = $('table'),
		matrix = [
			[3, 3, 3], 
			[1, 5, 1], 
			[5, 5, 5],
			[10, 3, 8],
			[2, 2, 2] 
		];

function readAndPrintArray(array){
	
	arr = array;
	for(var i = 0; i < arr.length; i++) {
		
		var tr = $('<tr>');

		for(var j = 0; j < 3; j++) {

			var td = $('<td>').text(arr[i][j]);
			tr.append(td);
		}
		tr.appendTo(table);
	}
}

readAndPrintArray(matrix);
// test here http://codepen.io/tvixxx/pen/EyxbGK
