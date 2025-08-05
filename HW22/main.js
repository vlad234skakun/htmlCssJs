// Создать функцию, которая будет изменять цвет фона элемента каждую секунду. Цвет должен меняться случайным образом из заданного набора цветов. const colors = ['#ff0000', '#00ff00', '#0000ff'];
const colors = ['#ff0000', '#00ff00', '#0000ff'];

// Создания функции, которая выбирает рандомно цвет из массива и менять цвет фона каждую секунду
function changeBackgroundColor(){

    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random()* colors.length)]
        document.body.style.background = randomColor;
    }, 1000);
}

// changeBackgroundColor()




