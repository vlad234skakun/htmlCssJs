// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 50 },
    { name: "Tablet", price: 30 }
];
    function hasExpensiveItem(arr) {
    return arr.some(elem => elem.price>50)
}

console.log(hasExpensiveItem(products));

