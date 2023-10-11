const getUsers = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  return await response.json()  
};

const logUsers =   async () => {
  const users  = await getUsers()
  console.log(users)
}

console.log(1)
console.log(2)

logUsers()

console.log(3)
console.log(4)


// fetch("http://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     console.log("Response: ", response)
//     return response.json()
//   })
//   .then(users => console.log(users))
//   .catch(error => console.log("Error: ", error));
