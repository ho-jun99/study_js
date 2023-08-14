const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

loginForm.addEventListener("submit", onSubmit);

function getUserNameFromLocalStroage() {
    return localStorage.getItem(USERNAME_KEY);
}

function paintingGreeting() {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${ getUserNameFromLocalStroage()} !`;
}

function printingForm() {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 폼을 제출했을때 Form태그를 안보이도록 한다.
}

function deleteForm() {
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function onSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    deleteForm();
    paintingGreeting();
}


const savedUsername = localStorage.getItem(USERNAME_KEY)
if (savedUsername === null ) {
    // show the form
    printingForm()
}else {
    // show the greeting
    paintingGreeting();
}