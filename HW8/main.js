// Задача 1
// Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.
// console.log("================");
// let summs = (a,b=20) => a+b;
// function summs(a,b=20)  {
//      return a + b;
// }

// console.log(summs (20,30));
// console.log(summs (20));


// Задача 2
// Создайте массив numbers с несколькими числами.
// Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.

// let numbers = [2,3,4,6,9,22,56]

// function calculateSum(numbers) {
//     let sum = 0;
//     console.log("================");
//     for (let i=0; i<numbers.length; i++) {
//         sum = sum+numbers[i];
//     }
//     return sum;
// }  
// console.log(calculateSum(numbers));


// Задача 3 *
// Создайте массив students с объектами студентов (имя, возраст, курс).
// Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.

// let students = [
//     {
//         name:"Vlad",
//         age: 20,
//         course: 1
//     },
//     {
//         name:"Dalv",
//         age: 18, 
//         course: 3
//     },
//     {
//         name:"Adlv",
//         age: 19,
//         course: 2
//     }
// ]
//     function displayStudentInfo(student) {
//         console.log("Имя: " + student.name);
//         console.log("Возраст: " + student.age);
//         console.log("Курс: " + student.course);
//     }

//     for (let i=0; i<students.length; i++) {
//         console.log("================");
//         displayStudentInfo(students[i])   
        
        
//     }