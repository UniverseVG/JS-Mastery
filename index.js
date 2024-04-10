const arr = [
  1,
  "code",
  2,
  "test",
  2,
  2,
  1,
  2,
  "code",
  3,
  1,
  1,
  2,
  "test",
  "code",
  3,
  3,
  3,
];
const obj = arr.reduce((accum, value) => {
  accum[value] = (accum[value] || 0) + 1;
  return accum;
}, {});

const arr1 = [{ key1: "value1" }, { key2: "value2" }, { key3: "value3" }];
const obj1 = arr1.reduce((accum, value) => {
  Object.keys(value).map((item) => {
    return (accum[item] = value[item]);
  });
  return accum;
}, {});

console.log(obj1);
