//keyword 'this'

let user = {
  name: 'João',
  age: '31',
  mail: 'example@email.com',
  city: 'São Paulo',
  blogPosts: [
    { title: 'Empadão de frango', likes: 30 },
    { title: '4 receitas com javascript e maisena', likes: 50 }
  ],
  login: function (){
    console.log('usuário logado')
  },
  logout: () => {
    console.log('usuário deslogado')
  },
  logBlogPosts (){
    console.log(`${this.name} escreveu os seguintes posts:`)
    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes)
    })
  }
}

user.logBlogPosts()
