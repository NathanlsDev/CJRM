/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01
  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem:
    "O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem: 
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const inputInterface = document.querySelector('#username')
const form = document.querySelector('form')
const button = document.querySelector('button')

const paragraph = document.createElement('p')
const submitFeedBack = document.createElement('p')
let isAValidUser = false

const invalidUserNameInfo = {
  paragraph: paragraph,
  text: 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas',
  className: 'username-help-feedback',
  previousSibling: inputInterface,
}
const validUserNameInfo = {
  paragraph: paragraph,
  text: 'Username válido =)',
  className: 'username-success-feedback',
  previousSibling: inputInterface,
}

const invalidSubmitInfo = {
  paragraph: submitFeedBack,
  text: 'Por favor, insira um username válido',
  className: 'submit-help-feedback',
  previousSibling: button,
}
const validSubmitInfo = {
  paragraph: submitFeedBack,
  text: 'Dados enviados =)',
  className: 'submit-success-feedback',
  previousSibling: button,
}

const showUserNameInfo = event => {
  userValidation(event.target.value)  
  removeSubmitParagraph()
}

const userValidation = userName => { 
  const isAValidUserName = /^[a-zA-Z]{6,}(?: [a-zA-Z]+)*$/.test(userName)

  if (!isAValidUserName){
    insertParagraphIntoDOM(invalidUserNameInfo)
    userValidityCallBack(false)
    return    
  }
  insertParagraphIntoDOM(validUserNameInfo)
  userValidityCallBack(true)
}
const userValidityCallBack = boolean => isAValidUser = boolean

const removeSubmitParagraph = () => {
  submitFeedBack.setAttribute('data-feedback', 'submit-feedback')
  if (submitFeedBack){
    submitFeedBack.remove()
  }
}

const insertParagraphIntoDOM = paragraphInfo => {
  const { paragraph, text, className, previousSibling } = paragraphInfo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
  previousSibling.insertAdjacentElement('afterend', paragraph)
}

const showSubmitInfo = event => {
  event.preventDefault()
  if (isAValidUser){
    return insertParagraphIntoDOM(validSubmitInfo)
  }
  insertParagraphIntoDOM(invalidSubmitInfo)
}

inputInterface.addEventListener('input', showUserNameInfo)
form.addEventListener('submit', showSubmitInfo)

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/


/*
  03

  - Há algumas aulas, falamos sobre o método some;

  - Neste exercício, seu desafio será criar este método do zero;

  - Implemente uma função "some" que possui a mesma funcionalidade do método
    some original;

  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/

const some = (array, func) => {
  for (let i = 0; i < array.length; i++){
    // console.log(array[i])
    if (func(array[i])){
      return true
    }
  }
  return false
}
console.log(some([1,2,3], item => item === 2))
console.log(some([4,5,6], item => item === 3))