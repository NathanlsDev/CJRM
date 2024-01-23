class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }
  login() {
    console.log(`${this.name} logged in app`);
    return this;
  }
  logout() {
    return `${this.name} logout`;
  }
  addPoint() {
    this.points++;
    return `${this.name} now have ${this.points > 1 ? `points` : `point`}.`;
  }
}

const user = new User("Roger", "Remail@example.com.br");
const user2 = new User("Nathan", "Nemail@example.com.br");

user.login().addPoint();

console.log(user);
