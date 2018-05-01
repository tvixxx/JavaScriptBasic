const array = ['hello', 'test', 'rest', 'mest', 1, 5, '700', 600, 100500, 'wow!'];

const result = array.filter(value => typeof(value) === 'number');

console.log(result);
