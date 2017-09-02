const objTypes = {
  	number: 'number',
    string: 'string',
    boolean: 'boolean',
    'undefined': 'undefined',
    'NaN': 'NaN',
    'null': 'null'
  }

function filterByType() {

//let args = Array.from(arguments);
  let result = [];
  let args = Array.prototype.slice.apply(arguments);
  let typeForFilter = args[0];
  let isCorrectType = checkCorrectType(typeForFilter);
  
  if (!isCorrectType) {
  	 throw new Error('Введен неверный тип данных!');
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

filterByType('NaN', 10, 20, 'a', 'b', true, false, undefined, null, NaN);
