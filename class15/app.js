const ul = document.querySelector('ul')

const lis = document.querySelectorAll('li')
lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target
    console.log('Li clicked')
    event.stopPropagation()
    
    clickedElement.remove()
    //clickedElement.style.textDecoration = 'line-through'
  })
})

const button = document.querySelector('button')
button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'New Item'
  ul.prepend(li)
  console.log(li)  
})

ul.addEventListener('click', () => {
  console.log('Ul clicked')

})