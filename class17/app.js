const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()
  console.log(event.target.username.value)
})

const username = 'Nathan'
const pattern = /^[a-zA-Z]{3,}$/
const isAMatch = pattern.test(username)

if (isAMatch){
  console.log('O teste passou =)')  
} else {
  console.log('O teste NÃO passou =(')
}

// const result = username.search(pattern)
// console.log(result)
