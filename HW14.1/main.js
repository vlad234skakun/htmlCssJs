// 1.Создайте функцию waitForTime, которая возвращает Promise. Этот промис должен резолвиться через указанное количество миллисекунд, которое нужно передавать в функцию waitForTime в качестве аргумента. Если время вышло, промис резолвится с сообщением "Ожидание завершено".


// Например через секунды, 3 или 5 секунд.


function waitForTime(milliseconds) {
    return new Promise((resolve) => {     
        setTimeout (() => {resolve("Ожидание завершено")}, milliseconds)


    })
}

waitForTime(3000).then(message => console.log(message))
waitForTime(5000).then(message => console.log(message))


