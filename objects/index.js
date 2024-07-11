const myProto = {
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

myProto.__proto__.luffy = "gum gum pistol";
const obj = myProto;

obj.name = "John";

const protoOfObj = Object.getPrototypeOf(obj);

console.log(obj.luffy);
