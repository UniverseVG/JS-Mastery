Function.prototype.customCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  context.callback = this;
  context.callback(...args);
};

let car = {
  a: 1,
  b: 2,
};
function myFunction(arr) {
  console.log(this.a, this.b, arr);
}

myFunction.customCall(car, [3, 4]);

Function.prototype.customApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  if (!Array.isArray(args)) throw new Error("args is not an array");

  context.callback = this;
  context.callback(...args);
};

myFunction.customCall(car, [3, 4]);
