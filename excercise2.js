export const once = (func) => {
  let result;
  return () => {
    if (func) {
      result = func.apply(this, arguments);
      func = null;
    }
    return result;
  };
};
