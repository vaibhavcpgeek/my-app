export const once = (func) => {
  let result;
  // Closure. It wil return function with locally saved func (i.e. callback)
  return (...args) => {
    if (func) {
      result = func.apply(this, args);
      // Keep it null so that it won't run in successive calls
      func = null;
    }
    return result;
  };
};
