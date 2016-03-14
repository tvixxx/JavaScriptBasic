//Возвращает сумму в массиве - сколь угодно чисел

var sumArg = function(){
  var i, sum = 0;
  for (i = 0; i < arguments.length; i++){
    sum += arguments[i];
  };
  return sum;
};

console.log( sumArg(1,2,3) );
