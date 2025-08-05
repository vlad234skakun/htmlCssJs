// Задания 1.*

// Напишите программу для оценки студентов в зависимости от их баллов. Программа должна принимать на вход количество баллов (целое число) и выводить оценку в виде буквенного символа по следующей шкале:

// 90 и выше: 'A'

// 80-89: 'B'

// 70-79: 'C'

// 60-69: 'D'

// Меньше 60: 'F'

let score = 100;

if (score>=90) {
    console.log("A");
}

else if (score>=80) {
    console.log("B");
    
}

else if (score>=70) {
    console.log("C");
    
}

else if (score>=60) {
    console.log("D");
    
}

else {
    console.log("F");
}


// Задания 2.*

// Объявите переменную dayOfWeek и присвойте ей значение от 1 до 7, представляющее день недели (например, 1 - "Понедельник", 2 - "Вторник", и так далее).

// Используя конструкцию switch, определите текущий день недели и выведите его в консоль. (Попробуйте поменять значение переменной dayOfWeek и запустить программу снова.)

let dayOfWeek = 3;

switch (dayOfWeek) {
    case 1: console.log("Понедельник"); 
        break;
    case 2: console.log("Вторник"); 
        break;
    case 3: console.log("Среда"); 
        break;
    case 4: console.log("Четверг"); 
        break;
    case 5: console.log("Пятница"); 
        break;
    case 6: console.log("Суббота"); 
        break;
    case 7: console.log("Воскресенье"); 
        break;

    default: console.log("Не понятно")
        break;
}