const link = document.querySelector('a')
console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://twitch.tv')
console.log(link.getAttribute('href'))
link.innerText = 'Twitch'

const paragraph = document.querySelector('p')
console.log(paragraph.getAttribute('class'))
paragraph.setAttribute('class', 'success')

paragraph.setAttribute('style', 'color: red;')
