const formAddTodo = document.querySelector(".form-add-todo");
const inputSearchTodo = document.querySelector(".form-search input");
const todosContainer = document.querySelector(".todos-container");

const addTodo = inputValue => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" tabindex="0" data-todo="${inputValue}">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
    </li>
    `;
    event.target.reset();
  }
};

const removeTodo = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash;
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);

  if (trashDataValue) todo.remove();
};

const filterTodos = (todos, userInput, matchedTodos) => todos
  .filter( todo => {
    const matchedTodos = todo.textContent.toLowerCase().includes(userInput);
    return matchedTodos ? matchedTodos : !matchedTodos;
  });

const handleClasses = (todos, classToAdd, classToRemove) => {
  todos.forEach( todo => {
    todo.classList.add(classToAdd);
    todo.classList.remove(classToRemove);
  });
};

const disableTodos = (todos, userInput) => {
  const todosToHide = filterTodos(todos, userInput, false)
    .filter( todo => !todo.textContent.toLowerCase().includes(userInput));

  handleClasses(todosToHide, "disabled", "d-flex");
};

const enableTodos = (todos, userInput) => {
  const todosToShow = filterTodos(todos, userInput, true)
    .filter( todo => todo.textContent.toLowerCase().includes(userInput));

  handleClasses(todosToShow, "d-flex", "disabled");
};

inputSearchTodo.addEventListener("input", (event) => {
  const userInput = event.target.value.trim().toLowerCase();
  const todos = Array.from(todosContainer.children);

  disableTodos(todos, userInput);
  enableTodos(todos, userInput);
});

formAddTodo.addEventListener("submit", event => {
  event.preventDefault();
  const inputValue = event.target.add.value.trim();
  addTodo(inputValue);
});

todosContainer.addEventListener("click", event => {
  const clickedElement = event.target;
  removeTodo(clickedElement);
});
