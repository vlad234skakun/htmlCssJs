// Задание 1 

// Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.



async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')

        if (!response.ok) {
            throw new Error("Ошибка запроса: ${response.status}");
        }
        const posts = await response.json()
        console.log(posts);
    }
    catch (error) {
        console.error ("Ошибка при выполнении запроса:", error.message)
    }
}

fetchPosts();


// Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль

function divideNumbers (a,b) {
    try { 
        if (b===0) {
            throw new Error("Ошибка: деление на ноль невозможно");
        }
        const result = a / b;
        console.log(`Результат деления: ${result}`);
        return result;
        
    } catch (error) {
        console.error(error.message); 
    }
}

divideNumbers (10,2)
divideNumbers (10,0)