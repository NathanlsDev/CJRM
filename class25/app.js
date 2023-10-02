const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      return callback(null, request.responseText);
    }

    if (isRequestNotOk) {
      callback("Não foi possível obter os dados", null);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};

getTodos((error, data) => {
  const result = error || data;
  console.log(result);
});
