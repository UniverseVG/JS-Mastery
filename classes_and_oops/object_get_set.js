const User = {
  $email: "h@hc.com",
  _password: "abc",

  get email() {
    return this.$email.toUpperCase();
  },

  set email(value) {
    this.email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
