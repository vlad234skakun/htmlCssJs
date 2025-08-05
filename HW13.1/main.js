// Создайте простую веб-страницу, где пользователь может вводить текст заметки. Рядом с полем ввода должна быть кнопка "Сохранить", которая сохраняет введенный текст в localStorage. Также добавьте блок, в котором будет отображаться последняя сохраненная заметка. При обновлении страницы заметка должна оставаться на месте.


/* <h1>Мои заметки</h1>
    <textarea id="noteInput" placeholder="Введите вашу заметку..."></textarea>
    <button id="saveButton">Сохранить</button>
    <h2>Последняя сохраненная заметка:</h2>
    <div id="noteDisplay">Заметка пока не сохранена</div> */


    const textarea = document.querySelector("textarea")
    const button = document.querySelector("button")
    const noteDisplay = document.getElementById("noteDisplay");


    if (localStorage.getItem("note")) {
        noteDisplay.textContent = localStorage.getItem("note")
    }

    button.addEventListener("click",()=> {
        const saveNoten = textarea.value
        localStorage.setItem("note", textarea.value);
        noteDisplay.textContent = textarea.value;
        textarea.value = ""
    }) 


    