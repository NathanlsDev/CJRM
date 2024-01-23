// class Student {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

function Student(name, email) {
  console.log(this);
  this.name = name;
  this.email = email;
}

Student.prototype.login = function () {
  return `${this.name} fez login`;
};

Student.prototype.comment = function () {
  return `${this.name} fez um comentário`;
};

Student.formatToDatabase = function (aString) {
  return aString.toUpperCase().replaceAll(" ", "_");
};

function TeacherAssistant(name, email, weekPosts) {
  Student.call(this, name, email);
  this.weekPosts = this.weekPosts;
}

TeacherAssistant.prototype = Object.create(Student.prototype);

TeacherAssistant.prototype.giveBadge = function ({ name }) {
  return `${this.name} deu uma medalha para ${name}`;
};

const arthurSouza = new TeacherAssistant(
  "Arthur Souza",
  "art@exemplo.com",
  false
);

const gabrielFialho = new Student("Gabriel Fialho", "gbriel@example.com");
const brenoLemos = new Student("Breno Lemos", "blemos@example.com");

console.log(arthurSouza.giveBadge(brenoLemos));
console.log(gabrielFialho.comment(), brenoLemos.comment());
console.log(gabrielFialho.comment === brenoLemos.comment);
console.log(gabrielFialho, brenoLemos);
console.log(Student.formatToDatabase("string para o banco de dados"));
console.dir(Student);
