function inherit(child, parent) {
  let Func = function() {};
  Func.prototype = parent.prototype;
  child.prototype = new Func();
}

function inherit(proto) {
  let func = function Fnc() {}
  func.prototype = proto
  let object = new F;
  return object;
}
