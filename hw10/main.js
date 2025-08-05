// Задание 1

// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

// Задание 2

// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".

// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент


const block1 = document.getElementById('blockItem1')

block1.addEventListener('mouseover', () => {
    block1.style.backgroundColor = 'red'
})

block1.addEventListener('mouseout', () => {
    block1.style.backgroundColor = 'blue'
})

///////////////////////////////////////////////////////////////////////////////

const block2 = document.getElementById('blockItem2')
const button = document.getElementById('button')

button.addEventListener('click', () => {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
   
    block2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})


