// Math object
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.7
console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

const randomNumbers = Math.random()
console.log(randomNumbers)
console.log(Math.round(randomNumbers * 10))


console.log('---------------------------------------------------')


// Primitive Values
let scoreOne = 50

let scoreTwo = scoreOne
console.log(`Score One: ${scoreOne} | Score Two: ${scoreTwo}`)

scoreOne = 100
console.log(`Score One: ${scoreOne} | Score Two: ${scoreTwo}`)

//Reference Values
let userOne = { name: 'Nathan', age: 28 }

let userTwo = userOne
console.log(userOne, userTwo)

userOne.age = 32
console.log(userOne, userTwo)