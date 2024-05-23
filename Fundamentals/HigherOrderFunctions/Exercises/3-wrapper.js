"use strict";

const contract = (fn, ...types) => {
  return (...args) => {
    for (let idx in args) {
      const currentType = typeof types[idx]();
      if (typeof args[idx] !== currentType) {
        throw new TypeError("Argument type mismatch");
      }
    }
    const result = fn(...args);
    if (typeof result !== typeof types[types.length - 1]()) {
      throw new TypeError("Result type mismatch");
    }

    return result;
  };
};

module.exports = { contract };
