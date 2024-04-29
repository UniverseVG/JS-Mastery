Array.prototype.customSome = function (callback) {
  let bool;
  if (!Array.isArray(this)) {
    throw new Error("this is not an array");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      bool = true;
      break;
    }
  }
  return bool;
};

const arr = [1, 2, 3, 4, 5, 6];

const res = arr.every((item) => {
  if (item < 7) {
    console.log(item);
    return item;
  }
});

// const res = arr.some((item) => {
//   if (item < 4) {
//     console.log(item);
//     return item;
//   }
// });

console.log(res);
