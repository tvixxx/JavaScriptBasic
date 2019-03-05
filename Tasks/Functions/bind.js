// es6
const bind = (fn, context, ...boundArgs) => {
  return (...args) => {
    return fn.apply(context, [...boundArgs, ...args]);
  }
}

//es5
var bind = function(fn, context) {
  var bindArgs = [].slice.call(arguments, 2);

  return function() {
    var fnArgs = [].slice.call(arguments);

    return fn.apply(context, bindArgs.concat(fnArgs));
  };
};
