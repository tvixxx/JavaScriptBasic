const bind = (fn, context, ...boundArgs) => {
  return (...args) => {
    return fn.apply(context, [...boundArgs, ...args]);
  }
}
