Array.prototype.customFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.customFilter((item) => {
  return item > 4;
});

console.log(result);
