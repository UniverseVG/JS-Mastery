Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const arr = [1, 2, 3];

const sum = arr.customReduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum)