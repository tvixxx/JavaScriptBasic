// Функция по удалению классов

// 1 method (with for cycle)
function removeClass(obj, cls) {
  var classes = obj.className.split(" ");
  
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] === cls) {
      classes.splice(i, 1);
      i--;
    }
  }
  
  obj.className = classes.join(" ");
  return obj.className;
}

// 2 method (with filter method)
function removeClass(obj, cls) {
  var classes = obj.className
          .split(" ")
          .filter(function(item){
              return item !== cls;
           });
  
 
  return obj.className = classes.join(" ");
}

