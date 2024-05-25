async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  if (maximumRetryCount > 0) {
    try {
      const result = await fetcher();
      console.log("try", result);
      return result;
    } catch (error) {
      const result = await fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
      return result;
    }
  } else throw new Error("maximum retry count exceeded");
}

const p1 = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random() > 0.5;
    console.log({ randomNumber });
    if (randomNumber) {
      return resolve("p1 is resloved");
    }
    return reject("p1 is rejected");
  });
};

(async function () {
  try {
    const result = await fetchWithAutoRetry(p1, 3);
    console.log({ result });
    return result;
    console.log("try");
  } catch (error) {
    console.log({ error });
  }
})();
