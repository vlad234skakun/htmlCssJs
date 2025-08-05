// Создайте HTML-страницу с элементом <div>. Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

let container = document.querySelector("#textItemContainer")
container.innerHTML = "Lorem ipsum <em>dolor</em> sit amet.";
// console.log(container);