// const input = document.querySelector("#debounce");
// const output = document.querySelector("#output");
// const input2 = document.querySelector("#throttle");
// const output2 = document.querySelector("#toutput");

// function debounce(callback, delay = 2000) {
//   let timer;

//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       callback.apply(this, args);
//     }, delay);
//   };
// }

// function throttle(callback, delay = 2000) {
//   let lastCall = 0;

//   return (...args) => {
//     let now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       callback.apply(this, args);
//     }
//   };
// }

// input.addEventListener(
//   "input",
//   debounce((e) => {
//     output.innerText = e.target.value;
//   }, 2000)
// );

// input2.addEventListener(
//   "input",
//   throttle((e) => {
//     output2.innerText = e.target.value;
//   }, 2000)
// );

// document.addEventListener("click", (e) => {
//   const isCircleExists = document.querySelector(".circle");
//   if (isCircleExists) {
//     isCircleExists.remove();
//   }
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   const randomNumber = Math.floor(Math.random() * (300 - 100) + 100);
//   circle.style.height = `${randomNumber}px`;
//   circle.style.width = `${randomNumber}px`;
//   circle.style.borderRadius = `${Math.floor(randomNumber / 2)}px`;
//   circle.style.border = "1px solid black";
//   circle.style.position = "absolute";
//   circle.style.top = `${e.clientY - 50}px`;
//   circle.style.left = `${e.clientX - 50}px`;
//   document.body.appendChild(circle);
// });

// const newEvent = new CustomEvent("event", { detail: "hello" });

// document.addEventListener("event", (e) => {
//   console.log(e);
// });

// document.dispatchEvent(newEvent);

// const button = document.querySelector("button");

// button.addEventListener("custom:doubleClick", (e) => {
//   console.log("Double Click", e.detail.timeBetweenClicks);
// });

// const MAX_DOUBLE_CLICK_TIME = 500;
// let lastClick = 0;
// button.addEventListener("click", (event) => {
//   const timeBetweenClicks = event.timeStamp - lastClick;
//   if (timeBetweenClicks > MAX_DOUBLE_CLICK_TIME) {
//     lastClick = event.timeStamp;
//     return;
//   }
//   const doubleClick = new CustomEvent("custom:doubleClick", {
//     detail: { timeBetweenClicks },
//   });

//   event.target.dispatchEvent(doubleClick);
//   lastClick = 0;
// });

// sessionStorage.setItem("name", "varun");
// document.cookie = "name=varun";
