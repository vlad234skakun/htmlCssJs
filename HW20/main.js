// Создайте класс Shape, у которого есть метод draw().

// Создайте два наследника класса Shape: Rectangle и Circle.

// У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.

// Создайте массив, содержащий экземпляры классов Rectangle и Circle.

// Используйте цикл для вызова метода draw() для каждого элемента массива.


class Shape {
    draw() {
        console.log("Рисуем фигуру");
        
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Рисуем прямоугольник");

    }
}

class Circle extends Shape {
    draw() {
        console.log("Рисуем круг");

    }
}

const shapes = [new Rectangle(), new Circle(), new Rectangle()]

for (let i = 0; i<shapes.length; i++) {
    shapes[i].draw()
}