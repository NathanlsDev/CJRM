const paragraph = document.querySelector('.copy-me')
paragraph.addEventListener('copy', () => {
  console.log('copied text')
})

const box = document.querySelector('.box')
box.addEventListener('mousemove', event => {
  box.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
})

document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY)

})