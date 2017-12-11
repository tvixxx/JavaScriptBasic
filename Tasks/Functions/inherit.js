function inherit(child, parent) {
  let Func = function() {};
  Func.prototype = parent.prototype;
  child.prototype = new Func();
}
