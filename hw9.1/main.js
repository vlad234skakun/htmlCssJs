// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка). Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

const list = document.querySelector("ul")

if (list.children.length>=2) {
    const newItem = document.createElement("li")
    newItem.innerText = "Новый элемент"
    newItem.id = "newItem"
    list.replaceChild(newItem, list.lastElementChild)
}

