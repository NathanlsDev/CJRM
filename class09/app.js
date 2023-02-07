// literal object
let user = {
  name: 'joão',
  age: '31',
  mail: 'example@email.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas com javascript e maisena'],
  login: function () {
    console.log('usuário logado')
  },
  logout: () => {
    console.log('usuário deslogado')
  }
}

user.login()
user.logout()

// console.log(user.blogPosts[1])

// user.age = 28

// console.log(user.age)

// const key = 'mail'
// console.log(user[key])

// user['name'] = 'José'

// console.log(user.name)

// console.log(typeof user)

//methods
