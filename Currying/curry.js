function curry(fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        return curriedFn(...args, ...args2);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3));

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length && !args.includes(curry.placeholder)) {
      return fn(...args);
    } else {
      return function (...args2) {
        const combinedArgs = args.map((arg) =>
          arg === curry.placeholder && args2.length > 0
            ? args2.shift()
            : arg
        );
        return curried(...combinedArgs, ...args2);
      };
    }
  };
}

curry.placeholder = Symbol("_"); // Define placeholder symbol

const curriedSum = curry(function sum(a, b, c) {
  return a + b + c;
});

console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, curry.placeholder)(2)(3)); // Output: 6
console.log(curriedSum(1)(curry.placeholder, 2)(3)); // Output: 6
console.log(curriedSum(curry.placeholder, 1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2, 3)); // Output: 6
