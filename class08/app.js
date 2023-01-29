// function declaration // hoisting priority
function sayHi() {
  console.log("hi");
}

// function expression
const showFood = function () {
  console.log("pizza");
};
sayHi();
showFood();

// arguments, parameters and default parameters
const myFunc = function (name = "Derpson", lastName = "Derp") {
  console.log(`Hi, ${name} ${lastName}!`);
};
myFunc();
myFunc("Nathan", "Lima");

// return
// const double = function (number){
//   return number * 2
// }

// arrow function =>
const double = number => number * 2;
const result = double(3);

const showResult = function (value) {
  return `The result is: ${value}`;
};
console.log(showResult(result));
