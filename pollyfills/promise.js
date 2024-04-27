function CustomPromise(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(value) {
    isRejected = true;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }

  executor(resolve, reject);
}

const examplePromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

CustomPromise.resolve = (val) => {
  return new CustomPromise(function executor(resolve, reject) {
    resolve(val);
  });
};

CustomPromise.reject = (val) => {
  return new CustomPromise(function executor(resolve, reject) {
    reject(val);
  });
};
