const article = document.querySelector('article')

Array.from(article.children).forEach(element => {
  element.classList.add('article__element')
})


const title = document.querySelector('h2')

console.log(title.previousElementSibling)