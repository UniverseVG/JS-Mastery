// const obj = { name: "Version 1", additionalInfo: { version: 1 } };

// const shallowCopy1 = { ...obj };
// const shallowCopy2 = Object.assign({}, obj);

// shallowCopy1.name = "Version 2";
// shallowCopy1.additionalInfo.version = 2;

// shallowCopy2.name = "Version 2";
// shallowCopy2.additionalInfo.version = 2;

// console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
// console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
// console.log(shallowCopy2);

// const arr = [1, 2, 3, 4];
// function submitForm() {
//   // Get the form element
//   var form = document.getElementById("myForm");

//   // Create a new FormData object
//   var formData = new FormData(form);

//   console.log(formData.entries());

//   // Send the form data to the server (you would typically use XHR or Fetch API here)
//   // For demonstration purposes, we'll just log the form data to the console
//   for (var pair of formData.entries()) {
//     console.log(pair[0] + ": " + pair[1]);
//   }
// }

// document.addEventListener("keydown", function (event) {
//   console.log("keydown event:", event.key);
// });

// console.log(window);

// window.addEventListener("touchend", function (event) {
//   console.log("touch event:", event);
// });

// function MyClass() {
//   if (!(this instanceof MyClass)) {
//     throw new Error("Constructor MyClass should be called with new keyword");
//   }
//   console.log("Constructor called");
//   // Rest of the constructor code
// }

// // Usage:
// // const obj1 = new MyClass(); // This is allowed
// console.log(new MyClass());

// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 500, "Promise 1")
// );
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 200, "Promise 2")
// );

// Promise.any([promise1, promise2])
//   .then((value) => {
//     console.log("The first Promise to resolve:", value);
//     // Output: The first Promise to resolve: Promise 2
//   })
//   .catch((error) => {
//     console.error("Error:", error); // This won't be executed in this example
//   });

// class MyClass {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(value) {
//     [this.firstName, this.lastName] = value.split(" ");
//     // [firstName, lastName] = value.split(" ");
//     // this.firstName = firstName;
//     // this.lastName = lastName;

//     console.log(this.firstName, this.lastName);
//   }
//   static myStaticField = "Initialized static field";

//   static myStaticMethod(param) {
//     console.log(";dcvfv;", this.firstName); // Output: Initialized static field
//     console.log(param); // Output: [Function: MyClass]
//   }
// }

// const myInstance = new MyClass("John", "Doe");
// myInstance.fullName = "Jane Doe";
// console.log(myInstance.fullName);

// MyClass.myStaticMethod([1, 2, 3, 4]);

//this

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName() {
//     function getName() {
//       console.log(this.firstName);
//     }

//     getName();
//     console.log(this);
//   },
// };

// user.fullName();

// function hello() {
//   let res = 10;
//   this.res = 10;
//   console.log(this);
//   return res;
// }

// new hello();

// for (var i = 1; i <= 3; i++) {
//   ((i) => {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   })(i);
// }

// for (
//   let i = 0, getI = () => i, incrementI = () => (i = i + 1);
//   getI() < 3;
//   incrementI()
// ) {
//   console.log(i);
// }
// const clockArea = document.querySelector("#app");
// const now = new Date();
// console.log(
//   now.getHours().toString().padStart(0, 2),
//   now.getMinutes().toString().padStart(0, 2)
// );

// function clock() {
//   const now = new Date();
//   let amOrPm = "";
//   let hours = now.getHours();
//   if (hours > 12) {
//     amOrPm = "PM";
//   } else {
//     amOrPm = "AM";
//   }
//   clockArea.innerHTML =
//     (now.getHours() > 12 ? now.getHours() - 12 : now.getHours())
//       .toString()
//       .padStart(2, "0") +
//     ":" +
//     now.getMinutes().toString().padStart(2, "0") +
//     ":" +
//     now.getSeconds().toString().padStart(2, "0") +
//     " " +
//     amOrPm;

//   requestAnimationFrame(clock);
// }
// requestAnimationFrame(clock);

// console.log(clockArea);

// console.log("start");

// ["a", "b"].forEach((item) => console.log(item));

// console.log("end");

// const input = [
//   {
//     key: "Sample 1",
//     data: "Data 1",
//   },

//   {
//     key: "Sample 1",
//     data: "Data 1",
//   },
//   {
//     key: "Sample 1",
//     data: "Data 1",
//   },
//   {
//     key: "Sample 2",
//     data: "Data 1",
//   },
//   {
//     key: "Sample 3",
//     data: "Data 1",
//   },
//   {
//     key: "Sample 4",
//     data: "Data 1",
//   },
//   {
//     key: "Sample 4",
//     data: "Data 3",
//   },
// ];

// const obj = input.reduce((acc, cu) => {
//   acc[cu.key] = acc[cu.key] || [];
//   if (acc[cu.key]) {
//     acc[cu.key].push(cu);
//   }
//   return acc;
// }, {});

// const obj = {};
// for (let item of input) {
//   if (obj[item.key]) {
//     obj[item.key].push(item);
//   } else {
//     obj[item.key] = [item];
//   }
// }
// console.log(obj);

// const add = (a, b) => {
//   const startTime = Date.now();
//   let currentTime = startTime;
//   while (startTime + 500 > currentTime) {
//     currentTime = Date.now();
//   }
//   return a + b;
// };

// const memoize = (func, context) => {
//   let res = {};
//   return function (...args) {
//     var param = JSON.stringify(args);
//     console.log(param, res[param]);
//     if (!res[param]) {
//       res[param] = func.call(context || this, ...args);
//       console.log(res[param]);
//     }
//     return res[param];
//   };
// };

// const memoizeAddFunc = memoize(add, this);
// console.time("First call");
// console.log(memoizeAddFunc(2, 1));
// console.timeEnd("First call");
// console.time("second call");

// console.log(memoizeAddFunc(2, 1));
// console.timeEnd("second call");

// function computeAmount() {
//   totalAmount = 0;
//   function lacs(arg) {
//     totalAmount += arg * 100000;
//     return this;
//   }
//   function crores(arg) {
//     totalAmount += arg * 10000000;
//     return this;
//   }

//   function value() {
//     return totalAmount;
//   }

//   return {
//     lacs,
//     crores,
//     value,
//   };
// }
