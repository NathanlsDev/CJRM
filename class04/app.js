// // Booleans e comparisons
// // console.log(true, false, 'true', 'false')

// // Methods can return booleans
// const email = 'brucewayne@arkhan.com'
// const includes = email.includes('@')
// const names = ['dio', 'roger', 'robert']
// const arrayIncludes = names.includes('roger')

// // console.log(arrayIncludes)

// // Comparison operators
// const age = 31 

// // console.log(age  ==  31)
// // console.log(age  ==  35)
// // console.log(age  !=  31)
// // console.log(age  >  31)
// // console.log(age  <  32)
// // console.log(age  <=  31)
// // console.log(age  >=  31)

// const name = 'Nathan'
// console.log(name == 'Nathan')
// console.log(name == 'nathan')
// console.log(name > 'belinha')
// console.log(name > 'Belinha')

const age = 31

// equals and different 
// console.log(age == 31)
// console.log(age == '31')
// console.log(age != 31)
// console.log(age != '31')


// equals same type, different same type
// console.log(age === 31)
// console.log(age === '31')
// console.log(age !== 31)
// console.log(age !== '31')

// type conversion
let score = '100'
// score = Number(score)

// console.log(score + 1)
// console.log(typeof score)

const crazyConversion = Number('Maçã')
const convertedNumber = String(97)
const booleanConversion = Boolean(10)

console.log(convertedNumber, typeof convertedNumber)
console.log(crazyConversion, typeof crazyConversion)
console.log(booleanConversion, typeof booleanConversion)

/*
  Falsy values:
    - false
    - 0 
    - " ", ' ', ` `
    - undefined
    - null
    - NaN
  
  Truthy values:
    - Every values that's not falsy
*/