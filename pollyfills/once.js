function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once(function () {
  console.log("hello world");
});

hello();
hello();
hello();
hello();
hello();
hello();
