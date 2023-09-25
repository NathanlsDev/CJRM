const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (event) => {
  if (request.readyState === 4) console.log(request.responseText);
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

// console.log(request)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
