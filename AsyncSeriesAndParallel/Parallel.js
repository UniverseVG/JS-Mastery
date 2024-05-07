// Execute async tasks in Parallel
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`Error ${value}`);
      } else {
        resolve(value * 1000);
      }
    }, value * 1000);
  });
}

let tasks = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

const asyncParallel = async (tasks, callback) => {
  const results = [];
  const errors = [];

  // for (let task of tasks) {
  //   try {
  //     let res = await task;
  //     results.push(res);
  //   } catch (e) {
  //     errors.push(e);
  //   }
  // }

  let taskCompleted = 0;
  tasks.forEach((asyncTask) => {
    // invoke the async task
    // it can be a promise as well
    // for a promise you can chain it with then
    asyncTask
      .then((value) => {
        // store the output of the task
        results.push(value);
      })
      .catch((error) => {
        errors.push(error);
      })
      .finally(() => {
        // increment the tracker
        taskCompleted++;

        // if all tasks are executed
        // invoke the callback
        if (taskCompleted >= tasks.length) {
          callback(errors, results);
        }
      });
  });
};

asyncParallel(tasks, (error, result) => {
  console.log("error", error);
  console.log("result", result);
}).catch((e) => {
  console.error(e);
});
