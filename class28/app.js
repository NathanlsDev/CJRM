localStorage.setItem("name", "nathan");
localStorage.setItem("age", Infinity);

const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

console.log(name, age);

// localStorage.removeItem("name");
// localStorage.clear()