function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter(function (fn) {
      if (fn !== fnToRemove) {
        return fn;
      }
    });
  },
  unsubscribeAll: function () {
    this.observers = [];
  },
  fire: function () {
    this.observers.forEach((fn) => fn.call());
  },
};

const subject = new Subject();

const observer1 = function () {
  console.log("observer 1 is fired");
};
const observer2 = function () {
  console.log("observer 2 is fired");
};
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.fire();
// subject.unsubscribe(observer2);
// subject.fire();

subject.unsubscribeAll();
subject.fire();
