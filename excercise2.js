export const once = (func) => {
  let result;
  return (...args) => {
    if (func) {
      result = func.apply(this, args);
      func = null;
    }
    return result;
  };
};
