
// Функция для получения данных
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.status}`);    
        }
        const user = await response.json()
        renderUsers(user)
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}


//Функция для создания листа на странице 

function renderUsers(users) {
    users.forEach(element => {

        //
        const card = document.createElement('div')
        card.className = "card"

         // Заполняем карточку данными пользователя
           card.innerHTML = `
             <h2>${element.username}</h2>
             <p><span>ID:</span> ${element.id}</p>
             <p><span>Email:</span> ${element.email}</p>
             <p><span>City:</span> ${element.address.city}</p>
             <p><span>Phone:</span> ${element.phone}</p>
             <p><span>Company:</span> ${element.company.name}</p>
           `;

           document.body.appendChild(card)

    });
}

// Запускаем функцию
   fetchUsers();



// 1.Используя fetch для выполнения GET запроса к JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/users).
// Выведите список пользователей в консоль.


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Ошибка HTTP: " + response.status);
            
//         }
//         console.log(response);

//         return response.json();
//     })
//     .then(listUsers => {

//         listUsers.forEach(element => {
//             console.log(`ID:${element.id} NAME:${element.name} EMAIL:${element.email}`);
            
//         });
        
//     })
//     .catch(error => {
//         console.error(`Ошибка при получании данных ${error}`);
        
//     });
