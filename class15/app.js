const ul = document.querySelector('ul')

const button = document.querySelector('button')
button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'New Item'
  ul.prepend(li)
  console.log(li)  
})

ul.addEventListener('click', event => {
  const clickedElement = event.target

  if (clickedElement.tagName === 'LI'){
    clickedElement.remove()
  }
})