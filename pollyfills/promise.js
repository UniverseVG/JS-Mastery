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
      value = val instanceof CustomPromise ? val.value : val;
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
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

// function CustomPromise(executor) {
//   let onResolve,
//     onReject,
//     isFulfilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;

//   function resolve(val) {
//     if (val instanceof CustomPromise) {
//       val
//         .then((resolvedValue) => {
//           isFulfilled = true;
//           value = resolvedValue;
//           if (typeof onResolve === "function" && !isCalled) {
//             onResolve(value);
//             isCalled = true;
//           }
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     } else {
//       isFulfilled = true;
//       value = val;
//       if (typeof onResolve === "function" && !isCalled) {
//         onResolve(value);
//         isCalled = true;
//       }
//     }
//   }
//   function reject(val) {
//     isRejected = true;
//     if (typeof onReject === "function") {
//       onReject(val);
//       isCalled = true;
//     }
//   }

//   this.then = function (callback) {
//     onResolve = callback;
//     if (isFulfilled && !isCalled) {
//       isCalled = true;
//       onResolve(value);
//     }
//     return this;
//   };

//   this.catch = function (callback) {
//     onReject = callback;
//     if (isRejected && !isCalled) {
//       isCalled = true;
//       onReject(value);
//     }
//     return this;
//   };

//   try {
//     executor(resolve, reject);
//   } catch (error) {
//     reject(error);
//   }

//   executor(resolve, reject);
// }

// const examplePromise = new CustomPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// examplePromise
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

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

CustomPromise.all = (promises) => {
  return new Promise(function executor(resolve, reject) {
    if (!Array.isArray(promises)) {
      reject(new TypeError("promises argument must be an array"));
    }
    let results = [];
    let resolvedCount = 0;

    promises.forEach(function (promise, index) {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

    if (promises.length === 0) {
      resolve([]); // Resolve immediately if no promises provided
    }
  });
};

const promise1 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1500);
});

const promise3 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 2000);
});
const promise4 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 2000);
});

CustomPromise.all([promise1, promise2, promise3, promise4])
  .then((results) => {
    console.log("All promises resolved successfully:");
    console.log(results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:");
    console.error(error);
  });
