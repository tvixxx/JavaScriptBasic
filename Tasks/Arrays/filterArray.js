var array = ['hello', 'test', 'rest', 'mest', 1, 5, '700', 600, 100500, 'wow!'];

var result = array.filter(function(value){
  return (typeof(value) === 'number');
});

console.log(result);
