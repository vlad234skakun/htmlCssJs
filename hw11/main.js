// Задание 1 


// Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".

// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).

// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке. 


const correctLogin = "Vladyslav"
const correctPassword = "vladosik387"

const formContainer = document.getElementById("formContainer")
const login = document.getElementById("login")
const password = document.getElementById("password")
const button = document.getElementById("button")

formContainer.addEventListener("submit", (event)=> {
    event.preventDefault();
    const enteredLogin = login.value
    const enteredPassword = password.value

    if (enteredLogin === correctLogin && enteredPassword === correctPassword) {
        alert("Успешная аутентификация!");
    }
    else {
        alert("Ошибка: неверный логин или пароль.");
    }
})