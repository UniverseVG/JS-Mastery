const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

this.a = { name: "hello" };

const obj = {
  name: "bare",
  getName: function () {
    const nested = () => {
      console.log(this);
    };
    nested();
  },
};

const calc = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
  subtract(num) {
    this.total -= num;
    return this;
  },
};
const re = calc.add(10).multiply(5).subtract(30).add(30);
console.log(re.total);
