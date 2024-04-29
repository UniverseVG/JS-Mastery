Array.prototype.customEvery = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error("this is not an array");
  }
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const arr = [1, 2, 3, 4, 5, 6];

const res = arr.customEvery((item) => {
  if (item > 7) {
    console.log(item);
    return item;
  }
});

console.log(res);
