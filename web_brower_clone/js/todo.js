const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";


// fetch data with init
let todos = [];

function getTodosFromLocalStroage() {
    return JSON.parse(localStorage.getItem(TODOS_KEY))
}

function saveTodoInLocalStroage() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleDeleteBtn(e) {
    const li = e.target.parentElement;
    const span = li.querySelector("span")
    const removeTargetId = li.id;
    console.log(removeTargetId);
    li.remove();
    todos = todos.filter( (todo) => todo.id !== parseInt(removeTargetId));
    saveTodoInLocalStroage();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    li.appendChild(span);
    li.appendChild(deleteBtn);
    span.innerText = newTodo["text"];
    li.id = newTodo["id"];
    todoList.appendChild(li);
    deleteBtn.addEventListener("click",handleDeleteBtn);
}

function handleToDoSubmit(e) {
    e.preventDefault()
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTOdoObj = {
        text : newTodo,
        id : Date.now()
    }
    todos.push(newTOdoObj);
    paintToDo(newTOdoObj);
    saveTodoInLocalStroage(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos =localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos) {
    const parsedToDos = getTodosFromLocalStroage();
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}