// Реализовать функцию, которая будет создавать элементы списка на основе массива данных. Каждый элемент списка должен содержать кнопку, при нажатии на которую будет происходить удаление этого элемента из списка.


const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

function createList(items) {
    const list = document.getElementById('list');
    list.innerHTML = '';

    items.forEach((element , index) => {
    const li = document.createElement('li');
    li.textContent = element;

    const button = document.createElement('button');
    button.textContent = 'Delete';

    button.addEventListener('click', () => {
        li.remove();
    })
    li.appendChild(button);
    list.appendChild(li);

    });
}

createList(items);