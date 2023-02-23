const form = document.querySelector('.signup-form')
const feedBack = document.querySelector('.feedback')

const testUserName = userName => /^[a-zA-Z]{3,12}$/.test(userName)

form.addEventListener('submit', event => {
  event.preventDefault()

  const userName = event.target.username.value
  const isAValidUserName = testUserName(userName)

  if (isAValidUserName){

    return feedBack.textContent = 'Usuário válido'
  }
  feedBack.textContent = 'O usuário deve conter entre 3 e 12 caracteres, e deve conter apenas letras'
})


form.username.addEventListener('keyup', event => {
  const isAValidUserName = testUserName(event.target.value)
  console.log(event)

  if (isAValidUserName){
    return form.username.setAttribute('class', 'success')
  }
  form.username.setAttribute('class', 'error')  
})