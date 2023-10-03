const getTodos = (url, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      const data = JSON.parse(request.responseText);
      return callback(null, data);
    }

    if (isRequestNotOk) {
      callback("Não foi possível obter os dados", null);
    }
  });

  request.open("GET", url);
  request.send();
};

getTodos("./json/todos.json", (error, data) => {
  console.log(data);
  getTodos("./json/todos-02.json", (error, data) => {
    console.log(data);
    getTodos("./json/todos-03.json", (error, data) => {
      console.log(data);
    });
  });
});
