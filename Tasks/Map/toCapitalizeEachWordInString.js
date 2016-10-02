// Method 1

String.prototype.toJadenCase = function () {
  return this.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

//Method 2

String.prototype.toJadenCase = function () {
  
  var str = this.split(' ');
  var strLength = str.length;
  
  for (var i = 0, max = strLength; i < max; i++){
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  
  return str.join(' ');
  
};

var str = 'Hello my little friend';

console.log(str.toJadenCase());
