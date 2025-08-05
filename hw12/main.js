// Задание 1
// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод map, чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением "взрослый" для тех, кто старше 18 лет, и "ребенок" для остальных.

const people = [

    { name: "Alice", age: 25 },

    { name: "Bob", age: 30 },

    { name: "Charlie", age: 15 }

];

const result = people.map(person =>{
    return {
        ...person,
        status: person.age > 18 ? "взрослый" : "ребенок"
    }
})

console.log(result);


// Задание 2
// Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach, чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.

const movies = [

    { title: "Inception", rating: 4.9 },

    { title: "The Dark Knight", rating: 5.0 },

    { title: "Interstellar", rating: 3.8 },

    { title: "The Matrix", rating: 4.5 }

];

movies.forEach(movie => {
    if (movie.rating > 4) {
        console.log(movie.title);
    }
})