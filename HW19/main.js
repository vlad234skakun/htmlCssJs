// Создать объект counter, который будет иметь свойство count(по умолчанию значение равно 0) и методы increment и decrement для увеличения и уменьшения значения count соответственно.


// Пример вызова методов increment и decrement


// counter.increment();

// console.log(counter.count); // Ожидаемый вывод: 1

// counter.decrement();

// console.log(counter.count); // Ожидаемый вывод: 0


const counter = {
    count: 0,

    increment () {
        this.count++
    },
    
    decrement () {
        this.count--
    }

};

counter.increment();

console.log(counter.count); // Ожидаемый вывод: 1

counter.decrement();

console.log(counter.count); // Ожидаемый вывод: 0



// Написать функцию, которая принимает 2 аргумента и результат их сложения записывает 
// в this.result. Использовать метод call().

// const calk = {
//     result: 0
// }

// function add(a,b) {
//     this.result = a + b;
// }

// add.call(calk, 4,5)

// console.log(calk.result);
