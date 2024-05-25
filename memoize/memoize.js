const memoizeFunc = (func, context) => {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = func.call(context || this, ...args);
    }
    return res[argsCache];
  };
};

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 1000; i++) {}
  return num1 * num2;
};

const memoizedProduct = memoizeFunc(clumsyProduct);

console.time("First call");
console.log(memoizedProduct(9467, 834834));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedProduct(9467, 834834));
console.timeEnd("Second call");

function getYourMemoizedFunction() {
  const cache = {};
  function doHeavyCalculation(x) {
    if (cache[x]) return cache[x];
    const startTime = Date.now();
    let currentTime = startTime;
    while (startTime + 500 > currentTime) {
      currentTime = Date.now();
      console.log("Calculating...", currentTime - startTime);
    }
    const result = +Math.sqrt(x).toFixed(3);

    cache[x] = result;
    return result;
  }
  return doHeavyCalculation;
}

const memoizedDoHeavyCalculation = getYourMemoizedFunction();

// function memoize(func, context) {
//   let cache = {};
//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (!cache[key]) {
//       cache[key] = func.call(context || this, ...args);
//     }
//     return cache[key];
//   };
// }

// function multiply(a, b) {
//   for (let i = 0; i < 100000; i++) {}
//   return a * b;
// }
// const memoizedProduct = memoize(multiply);

// console.time("First call");
// console.log(memoizedProduct(4, 5));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memoizedProduct(4, 5));
// console.timeEnd("Second call");
