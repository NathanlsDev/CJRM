//keyword 'this'

let user = {
  name: 'João',
  age: '31',
  mail: 'example@email.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas com javascript e maisena'],
  login: function (){
    console.log('usuário logado')
  },
  logout: () => {
    console.log('usuário deslogado')
  },
  logBlogPosts (){
    console.log(`${this.name} escreveu os seguintes posts:`)
    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}

user.logBlogPosts()
