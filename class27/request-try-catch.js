const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("It was not possible to obtain the data");
    }

    return await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    
  } catch (error) {
    console.log(error.message);
  }
};

const logUsers = async () => {
  const users = await getUsers();
  console.log(users);
};

logUsers();
