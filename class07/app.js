// logic operator not (!)

let isUserLoggedIn = false;

if (!isUserLoggedIn) {
  console.log("Você precisa fazer o login para continuar");
}

console.log(!true);
console.log(!false);

// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log(`Sua pontuação: ${scores[i]}`);

  if (scores[i] === 100) {
    console.log("Parabéns, você atingiu a pontuação máxima");
    break;
  }
}

// switch statement
const grade = "B";

switch (grade) {
  case "A":
    console.log("Você tirou um A");
    break;

  case "B":
    console.log("Você tirou um B");
    break;

  case "C":
    console.log("Você tirou um C");
    break;

  case "D":
    console.log("Você tirou um D");
    break;

  case "E":
    console.log("Você tirou um E");
    break;

  default:
    console.log("nota inválida");
}

// if statements uses
// if (grade === 'A'){

// } else if (grade === 'B'){

// } else if (grade === 'C'){

// } else if (grade === 'D'){

// } else if (grade === 'E'){

// } else {

// }
