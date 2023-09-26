const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200)
    console.log(request, request.responseText);
});

request.open("GET", "https://jsonplaceholder.typicode.com/todoss");
request.send();

// console.log(request)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
