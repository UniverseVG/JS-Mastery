Function.prototype.customBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  context.callback = this;
  return function (...args2) {
    return context.callback(...args, ...args2);
  };
};

let car = {
  a: 1,
  b: 2,
};
function myFunction(arr) {
  console.log(this.a, this.b, arr);
}

const newObj = myFunction.customBind(car);

newObj([3, 4])
// console.log(newObj([3, 4]));
