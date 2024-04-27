Array.prototype.customMap = function (callback) {
  let temp = [];
  console.log("this", this);
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }

  return temp;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.customMap((item) => {
  return item;
});
