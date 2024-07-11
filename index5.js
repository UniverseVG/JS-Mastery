// const dates = ["1-5-2012", "2-2-2011", "1-3-2010", "1-1-2012"];

// const transformedDate = dates.map((date) => {
//   const tempDate = date.split("-");
//   const newDate = new Date(
//     tempDate[2],
//     tempDate[1] - 1,
//     tempDate[0]
//   ).toLocaleDateString();
//   return newDate;
// });

// const sortedDate = transformedDate.sort((a, b) => new Date(a) - new Date(b));
// console.log(sortedDate);

// function ConstructorFunction(name, age) {
//   this.name = name;
//   this.age = age;
//   this.text = function hello() {
//     return `hello ${this.name} your age is ${this.age}`;
//   };
// }

// const obj = new ConstructorFunction("john", 24);
// console.log(obj.text());

// console.log(obj);

// function FactoryFunction(name, age) {
//   let obj = {};
//   obj.name = name;
//   obj.age = age;
//   obj.text = function hello() {
//     return `hello ${this.name} your age is ${this.age}`;
//   };

//   return obj;
// }

// const obj1 = FactoryFunction("john", 24);
// console.log(obj1.text());

// console.log(obj1);

// const STATE = {
//   FULFILLED: "fulfilled",
//   REJECTED: "rejected",
//   PENDING: "pending",
// };

// class MyPromise {
//   #thenCbs = [];
//   #catchCbs = [];
//   #state = STATE.PENDING;
//   #value;
//   #onSuccessBind = this.#onSuccess.bind(this);
//   #onFailBind = this.#OnFail.bind(this);
//   constructor(cb) {
//     try {
//       cb(this.#onSuccess, this.#OnFail);
//     } catch (e) {
//       this.#OnFail(e);
//     }
//   }

//   #runCallbacks() {
//     if (this.#state === STATE.FULFILLED) {
//       this.#thenCbs.forEach((callback) => {
//         callback(this.#value);
//       });

//       this.#thenCbs = [];
//     }
//     if (this.#state === STATE.REJECTED) {
//       this.#catchCbs.forEach((callback) => {
//         callback(this.#value);
//       });

//       this.#catchCbs = [];
//     }
//   }
//   #onSuccess(value) {
//     if (this.#state !== STATE.PENDING) {
//       return;
//     }
//     this.#value = value;
//     this.#state = STATE.FULFILLED;

//     this.#runCallbacks();
//   }

//   #OnFail(value) {
//     if (this.#state !== STATE.PENDING) {
//       return;
//     }
//     this.#value = value;
//     this.#state = STATE.REJECTED;
//     this.#runCallbacks();
//   }

//   then(thenCb, catchCb) {
//     return new MyPromise((resolve, reject) => {
//       this.#thenCbs.push((result) => {
//         if (thenCb == null) {
//           resolve(result);
//           return;
//         }
//         try {
//           resolve(thenCb(result));
//         } catch (e) {
//           reject(e);
//         }
//       });
//       this.#catchCbs.push((result) => {
//         if (catchCb == null) {
//           resolve(result);
//           return;
//         }
//         try {
//           resolve(catchCb(result));
//         } catch (e) {
//           reject(e);
//         }
//       });
//       if (thenCb !== null) {
//         this.#thenCbs.push(cb);
//       }

//       if (catchCb !== null) {
//         this.#catchCbs.push(cb);
//       }

//       this.#runCallbacks();
//     });
//   }

//   catch(cb) {
//     this.then(undefined, cb);
//   }

//   finally(cb) {}
// }


// let arr = [1,1,2,1,3,2,2,3,1];

// function transform(arr){
//     let tempArr = [];
//     let tempArr2 = [];
//     for (let i of arr) {
//         if(i === 1){
//             tempArr.push(i);
//         }
//         if( i !== 1)
//         {
//             tempArr2.push(i);
//         }   
//      } 
//     return tempArr.concat(tempArr2);
// }

// let res = transform(arr);
// console.log(res );
