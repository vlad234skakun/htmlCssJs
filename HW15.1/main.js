//Задание 1

// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.


async function gateDate() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
        if (!response.ok) {
            throw new Error (`Ошибка ${response.status}`)
        }
        const date = await response.json()
        console.log("Результат запроса:", date);
    }
    
    catch (error) {
        console.error("Ошибка при выполнении запроса:", error.message);
    }
}

gateDate()


// Задание 2

// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.


async function fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      console.log("Результат запроса (10 элементов):", data);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error.message);
    }
  }
  
  fetchPosts();
  