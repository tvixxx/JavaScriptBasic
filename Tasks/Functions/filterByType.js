const objTypes = {
  	number: 'number',
    string: 'string',
    boolean: 'boolean',
    'undefined': 'undefined',
    'NaN': 'NaN',
    'null': 'null'
  }

function filterByType() {
  let result = [];
  //let args = Array.from(arguments); // es6 syntax
  let args = Array.prototype.slice.apply(arguments);
  let typeForFilter = args[0];
  let isCorrectType = checkCorrectType(typeForFilter);
  
  if (!isCorrectType) {
  	 throw new Error('Введен неверный тип данных! Возможен ввод только: number, string или boolean');
  }
  
  for (let i = 1; i < args.length; i++) {
  	if (typeof args[i] === typeForFilter) {
    	result.push(args[i]);
    }
  }
  
  return result;
}

function checkCorrectType(value) {
	let typeOfValue = value;
  
	return (typeOfValue === objTypes.number ||
  				typeOfValue === objTypes.string ||
        	typeOfValue === objTypes.boolean);
}

filterByType('number', 10, 20, 'a', 'b', true, false);
