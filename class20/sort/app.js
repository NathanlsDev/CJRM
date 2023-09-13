const theBigFamily = [
  { name: "Lineu", score: 20 },
  { name: "Nenê", score: 10 },
  { name: "Tuco", score: 50 },
  { name: "Bebel", score: 30 },
  { name: "Agostinho", score: 70 },
];

// theBigFamily.sort((item1, item2) => {
//   if (item1.score > item2.score) {
//     return -1;
//   } else if (item2.score > item1.score) {
//     return 1;
//   }
//   return 0;
// });
// console.log(theBigFamily)

theBigFamily.sort((item1, item2) => item2.score - item1.score)
console.log(theBigFamily)