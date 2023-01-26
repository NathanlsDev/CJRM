// if
const age = 19;

if (age > 18) {
  // console.log("You are over 18 years old");
}

const simpsons = ["Marge", "Homer", "Lisa", "Bart"];

if (simpsons.length >= 5) {
  // console.log("This array has too much characters");
}


const password = 'oi1235486452'

// function verifyPassword(){
//   if (password.length >= 8){
//     return console.log('Valid password')
//   }

//   return console.log('Weak password')
// }

// verifyPassword(password)


if (password.length >= 12 && password.includes('1')){
  console.log('Strong password')

} else if (password.length >= 8 || password.includes('1')){
  console.log('Valid password')

  }

  else { console.log('Weak password') }