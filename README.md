# HTML, CSS, JavaScript

## homework_01

1. Создать папку проекта с название HW на рабочем столе.
2. В папке создать файл index.html
3. В файл index.html добавить простейшую html страницу с тегами html, head, body и h1.
4. В теге h1 прописать текст “This is my first homework!”
5. Запустить программу.

## homework_02_1

Форма должна содержать 2 текстовых поля (text, password), 2 кнопки (отправка данных и сброс), 1 чекбокс.

## homework_03

1. Создайте HTML-страницу с контейнером(div) для списка карточек(div).
2. Используя CSS и свойства Flexbox, сделайте так, чтобы карточки располагались в строку и растягивались по ширине контейнера. Можно использовать любое кол-во карточек.
3. Каждая карточка должна содержать изображение(любое изображение) и название (любой текст).
4. Убедитесь, что при уменьшении размеров экрана карточки остаются читаемыми и красиво адаптируются.

## homework_03_1

Сверстать форму по образцу, использовать flex-direction: column для формы, и flex для блока с двумя fieldset, кнопку отправки центрировать с помощью flex. Наполнение и цвета могут быть произвольными.

## homework_04

Создать HTML-страницу, которая содержит 3 блока с заголовком и текстом, заголовок должен “прилипать” к верхней части страницы при прокрутке. Тегу body задать высоту в 2000px. Наполнение блоков произвольное, можно воспользоваться сайтом https://www.lipsum.com/.


## homework_04_1

Создать HTML-страницу, которая содержит кнопку. Кнопку стилизовать на свое усмотрение, можно опираться на скриншоты.
Кнопка должна иметь 3 состояния:

- покой - основные стили
- наведение - можно изменить цвет текста, фон, границу и т.д.
- нажатие - должен появляться текст “Кнопка нажата”
  Для смены состояний использовать анимированный переход.


## homework_05


## homework_05_1

Сверстать 3 экран макета из прошлых уроков.

[Макет](https://www.figma.com/file/siI1IXw74fX9Q5c4NqJHPn/Untitled?type=design&node-id=0%3A1&mode=design&t=MiyGFGUF5xBDKgJI-1)

## homework_06_1

### Задание 1.

- Объявите две переменные firstName и lastName и присвойте им ваши имя и фамилию.
- С помощью конкатенации строк создайте третью переменную greeting, содержащую приветствие в формате "Привет, Имя Фамилия!".
- Выведите переменную greeting в консоль.

### Задание 2.\*

- Создайте переменную sentencePart1 и присвойте ей начало предложения (например, "Я люблю").
- Создайте переменную sentencePart2 и присвойте ей завершение предложения (например, "программирование").
- С помощью конкатенации строк создайте переменную completeSentence, объединяющую обе части предложения.
- Выведите переменную completeSentence в консоль.

## homework_06_2

### Задание 1.\*

Напишите программу для оценки студентов в зависимости от их баллов. Программа должна принимать на вход количество баллов (целое число) и выводить оценку в виде буквенного символа по следующей шкале:

- 90 и выше: 'A'
- 80-89: 'B'
- 70-79: 'C'
- 60-69: 'D'
- Меньше 60: 'F'

### Задание 2.\*

- Объявите переменную dayOfWeek и присвойте ей значение от 1 до 7, представляющее день недели (например, 1 - "Понедельник", 2 - "Вторник", и так далее).
- Используя конструкцию switch, определите текущий день недели и выведите его в консоль. (Попробуйте поменять значение переменной dayOfWeek и запустить программу снова.)

## homework_07

1. Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).
2. Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).
   const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]
3. Создайте массив чисел и найдите минимальное значение.
4. Создайте массив чисел и обновите значение элемента по индексу.
5. Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).

## homework_07_1

### Задание 1

Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.

### Задание 2

Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.

### Задание 3 \*

Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.

### Задание 4 \*

Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.

### Задание 5 \*\*

Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

## homework_08

### Задание 1

Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.

### Задание 2

Создайте массив numbers с несколькими числами.
Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.

### Задание 3 \*

Создайте массив students с объектами студентов (имя, возраст, курс).
Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.

## homework_08_1

### Задание 1

Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.

### Задание 2

Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.

## homework_09

Создайте HTML-страницу с элементом **div**. Используя innerHTML, замените внутренний текст этого элемента на "Это **em\***курсивный**\*em** текст".

## homework_09_1

У вас есть список элементов **li**. При загрузке страницы проверьте условие (например, длина списка). Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

## homework_10

### Задание 1.

У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

### Задание 2

У вас есть блок с id "colorBlock" и кнопка с id "colorButton".
При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент

## homework_11

- Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".
- Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).
- Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.

## homework_11_1

- Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, в котором будет отображаться количество кликов.
- Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.
- При достижении 10 кликов выведите сообщение под блоком с количеством кликов: "Поздравляем! Вы достигли 10 кликов!".

## homework_12

### Задание 1

Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод map, чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением "взрослый" для тех, кто старше 18 лет, и "ребенок" для остальных.

const people = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 15 }
];

### Задание 2

Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach, чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.

const movies = [
{ title: "Inception", rating: 4.9 },
{ title: "The Dark Knight", rating: 5.0 },
{ title: "Interstellar", rating: 4.8 },
{ title: "The Matrix", rating: 4.5 }
];

## homework_12_1

### Задание 1

Создайте массив объектов с полями "название" и "год". Напишите функцию, используя метод sort, чтобы отсортировать объекты по году от самого старого к самому новому.

const movies = [
{ title: "Inception", year: 2010 },
{ title: "The Dark Knight", year: 2008 },
{ title: "Interstellar", year: 2014 },
{ title: "The Matrix", year: 1999 }
];

### Задание 2

Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод reduce, чтобы объединить все имена в одну строку через запятую.

const people = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 22 }
];

## homework_13

Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

## homework_13_1

Создайте простую веб-страницу, где пользователь может вводить текст заметки. Рядом с полем ввода должна быть кнопка "Сохранить", которая сохраняет введенный текст в localStorage. Также добавьте блок, в котором будет отображаться последняя сохраненная заметка. При обновлении страницы заметка должна оставаться на месте.

## homework_14_1

Создайте функцию waitForTime, которая возвращает Promise. Этот промис должен резолвиться через указанное количество миллисекунд, которое нужно передавать в функцию waitForTime в качестве аргумента. Если время вышло, промис резолвится с сообщением "Ожидание завершено".
Например через секунды, 3 или 5 секунд.

## homework_15

Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path) /users получить всех пользователей. На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: id, username, email, address.city, phone и company.name. Стили добавляем произвольно.

_Использовала_ **grid**

## homework_15_1

### Учебный проект Todo-list

[Макет проекта](<https://www.figma.com/design/h7ecVRqH6mqrf2JYkCyb0C/To-do-list-(Community)?node-id=0-1&p=f&t=qsB4AhaPu99Qnnp4-0>)

**Техническое задание:**

- Создание todo-листа с функционалом создания, удаления и редактирования данных
- В качестве хранилища данных будет использоваться localStorage
- Выполнить верстку основных компонентов страницы (1 экран)
- Подключить шрифт Open Sans и библиотеку иконок (Google Fonts)

## homework_16

### Задание 1

Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.

### Задание 2

Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр \_limit). Результат вывести в консоль.

## homework_16_1

### Задание 1

Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.

### Задание 2

Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.

## homework_17

### Sass

Создать переменную и использовать ее в стилях.
Требования:

- Создайте переменную с именем primary-color и присвойте ей значение #FF0000.
- Используйте переменную primary-color для установки цвета текста в элементе с классом .heading.

## homework_18

### Sass

## Задание 1

Создать адаптивный контейнер для содержимого на веб-странице. Создайте переменную, представляющую ширину контейнера, необходимо установить разную ширину контейнера в зависимости от размера экрана устройства. Изначальная ширина контейнера 960px, если ширина экрана меньше 768px, то ширина контейнера должна быть равна 100%.

## Задание 2

Создать миксин для установки стилей кнопки.
Требования:

- Создайте миксин с именем button-styles, который принимает два аргумента: background-color и color.
- Используйте аргументы миксина для установки соответствующих стилей кнопки.
- Примените миксин к кнопке с классом .button.

## homework_19

Создать объект counter, который будет иметь свойство count(по умолчанию значение равно 0) и методы increment и decrement для увеличения и уменьшения значения count соответственно.

Пример вызова методов increment и decrement
counter.increment();
console.log(counter.count); // Ожидаемый вывод: 1
counter.decrement();
console.log(counter.count); // Ожидаемый вывод: 0

## homework_20

- Создайте класс Shape, у которого есть метод draw().
- Создайте два наследника класса Shape: Rectangle и Circle.
- У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.
- Создайте массив, содержащий экземпляры классов Rectangle и Circle.
- Используйте цикл для вызова метода draw() для каждого элемента массива.

## homework_21

Создайте класс CopyEntity. У него должен быть статический метод copyObject, который бы копировал любой объект. Метод copyObject принимает любой объект и возвращает его копию.

Например:
const arr1 = [1, 2, 3];
const arr2 = CopyEntity.copyObject(arr1);

arr1[0] = 999;

console.log(arr1);
console.log(arr2);

## homework_22

Создать функцию, которая будет изменять цвет фона элемента каждую секунду. Цвет должен меняться случайным образом из заданного набора цветов. const colors = ['#ff0000', '#00ff00', '#0000ff'];

## homework_23

Реализовать функцию, которая будет создавать элементы списка на основе массива данных. Каждый элемент списка должен содержать кнопку, при нажатии на которую будет происходить удаление этого элемента из списка.

## homework_24

1. Создать модальное окно с помощью специального тега dialog.
2. Стили в проект добавляем самостоятельно. Добавить анимацию и градиент.
3. Создать разметку.
4. Добавить управление состоянием диалогового окна.
5. Стилизовать фон элемента dialog.
6. Добавить функционал закрытия модального окна при клике на свободное пространство вне модального окна.
7. 


HTML, CSS, JavaScript

homework_01
Create a project folder named HW on your desktop.
Inside the folder, create a file named index.html.
In the index.html file, add a basic HTML structure with tags: html, head, body, and h1.
Inside the h1 tag, write the text: “This is my first homework!”
Launch the program in a browser.

homework_02_1
The form should include:
2 text input fields (text, password)
2 buttons (submit and reset)
1 checkbox

homework_03
Create an HTML page with a container (div) for a list of cards (div).
Using CSS and Flexbox, arrange the cards in a row and stretch them to fill the container width. Use any number of cards.
Each card must include an image (any image) and a title (any text).
Ensure that the layout is responsive and readable on smaller screens.

homework_03_1
Layout a form based on a sample using flex-direction: column for the form and flex for the block with two fieldset elements. Center the submit button using flex. Content and colors can be arbitrary.

homework_04
Create an HTML page containing 3 blocks with a heading and some text. The heading should stick to the top of the page when scrolling. Set the body height to 2000px. Use filler content (e.g., from lipsum.com).

homework_04_1
Create an HTML page with a button. Style the button as you wish (can follow screenshots).
The button must have 3 states:
Idle — base styles
Hover — change text color, background, border, etc.
Active (clicked) — display text: "Button clicked"
Use animated transitions to switch between states.

homework_05
(empty)

homework_05_1
Layout 3 screens from the design used in previous lessons.
[Макет](https://www.figma.com/file/siI1IXw74fX9Q5c4NqJHPn/Untitled?type=design&node-id=0%3A1&mode=design&t=MiyGFGUF5xBDKgJI-1)

homework_06_1
Task 1
Declare two variables firstName and lastName, and assign your first and last name.
Use string concatenation to create a third variable greeting with the format: “Hello, FirstName LastName!”.
Output the greeting variable to the console.

Task 2 *
Create variables sentencePart1 and sentencePart2 and assign them a beginning and end of a sentence.
Use string concatenation to create completeSentence.
Output it to the console.

homework_06_2
Task 1 *
Write a program that evaluates student grades based on their scores:
90 and above: 'A'
80–89: 'B'
70–79: 'C'
60–69: 'D'
Less than 60: 'F'

Task 2 *
Declare a variable dayOfWeek with a value from 1 to 7 (1 - "Monday", 2 - "Tuesday", etc.).
Use a switch statement to determine and output the corresponding day.

homework_07
Create an array of numbers and output each value using a loop.

From an array of random numbers (2 to 24), display numbers less than 20 and greater than 8.
Example:
const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]
Find the minimum value in an array.
Update an element in an array by its index.
Given an array of words, find the longest word using .length.

homework_07_1
Task 1
Create an object representing a person with the fields name and age. Print the data.

Task 2
Create an object representing a book with title and author. Create an array of books and print info about each one.

Task 3 *
Given a rectangle object:
const rectangle = { a: 10, b: 35 }
Add keys s (area) and p (perimeter).

Task 4 *
Create an array of fruit objects. Use a loop to filter red-colored fruits and log them.

Task 5 **
Create a playlist object with songs (array of objects). Print info about each song.

homework_08
Task 1
Create a function that takes 2 numbers and returns their sum. Set a default value for the second parameter. Call the function and log the result.

Task 2
Create an array numbers.
Write a function calculateSum that takes the array and returns the total (without using array methods).

Task 3 *
Create an array students with objects (name, age, course).
Write a function displayStudentInfo to log student info.

homework_08_1
Task 1
Create a function that takes an array of numbers and returns the product of all elements. Log the result.

Task 2
Create a number array. Use a while loop to calculate and print the sum of its elements.

homework_09
Create an HTML page with a div. Use innerHTML to replace its content with:
"This is italic text" (<em> tag)

homework_09_1
You have a list of li items. On page load, check a condition (e.g., list length). If true, create a new element and replace the last item in the list.

homework_10
Task 1
Create a blue block. On hover, change its color to red; on mouse leave, revert it.

Task 2
You have a block with id="colorBlock" and a button with id="colorButton".
On button click, change the block’s color to a random RGB color using Math.random().

homework_11
Create an HTML form with inputs for login and password, and a "Login" button.

Using JavaScript + DOM, check if the input matches predefined credentials.

Show success message or error message.

homework_11_1
Create an HTML page with a button “Click me” and a block showing the click count.
On each click, increase the counter and change the block’s background color.
If clicks % 5 == 0, change to a random color.
At 10 clicks, show a message: “Congratulations! You reached 10 clicks!”

homework_12
Task 1
Create an array of objects with name and age.
Use map() to create a new array with a status:
“adult” if age > 18
“child” otherwise
js
Kopieren
Bearbeiten
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 15 }
];
Task 2
Create an array of movie objects with title and rating.
Use forEach() to print titles with rating > 4.

js
Kopieren
Bearbeiten
const movies = [
  { title: "Inception", rating: 4.9 },
  { title: "The Dark Knight", rating: 5.0 },
  { title: "Interstellar", rating: 4.8 },
  { title: "The Matrix", rating: 4.5 }
];

homework_12_1
Task 1
Create an array of objects with title and year.
Use sort() to sort them from oldest to newest.

Task 2
Create an array of people with name and age.
Use reduce() to combine all names into a string separated by commas.

homework_13
Create an array of objects with name and price.
Implement a function hasExpensiveItem using some() to check if any item has a price > 50.

homework_13_1
Create a simple webpage where users can enter a note.
Add a "Save" button that saves the note to localStorage.
Also show the last saved note on the page.
The note should persist after page reload.

homework_14_1
Create a function waitForTime that returns a Promise which resolves after a given number of milliseconds with the message "Waiting is over".

homework_15
Make a GET request to https://jsonplaceholder.typicode.com/users.
Render a card for each user showing:

id

username

email

address.city

phone

company.name

Use any styles. (Used grid.)

homework_15_1
Project: Todo-list
[Макет проекта](<https://www.figma.com/design/h7ecVRqH6mqrf2JYkCyb0C/To-do-list-(Community)?node-id=0-1&p=f&t=qsB4AhaPu99Qnnp4-0>)
Requirements:
Build a todo list with create, delete, and edit functionality
Use localStorage for data
Create markup for main components (first screen)
Connect Open Sans font and icon library from Google Fonts

homework_16
Task 1
Use async/await to make a GET request to:
https://jsonplaceholder.typicode.com/todos/1
Print the result to the console.

Task 2
Use async/await to GET data from:
https://jsonplaceholder.typicode.com/posts?_limit=10
Print the result.

homework_16_1
Task 1
Use try/catch to send a request to:
https://jsonplaceholder.typicode.com/posts?userId=1
In the catch block, log an error message.
Introduce an error in the URL to test the catch.

Task 2
Write a function that divides one number by another, handling division by zero errors.

homework_17
Sass
Create a variable and use it in styles:
Declare a variable primary-color with value #FF0000
Use primary-color for text color in .heading

homework_18
Task 1
Create a responsive container with a variable width:
Default width: 960px
If screen width < 768px, set width to 100%

Task 2
Create a mixin for button styles:
Name: button-styles
Accepts background-color and color as arguments

Apply to a .button class

homework_19
Create a counter object with:
Property count (default 0)
Methods increment() and decrement()
js
Kopieren
Bearbeiten
counter.increment();
console.log(counter.count); // 1
counter.decrement();
console.log(counter.count); // 0

homework_20
Create a class Shape with a method draw()
Create two child classes: Rectangle and Circle
Override the draw() method in each
Create an array with instances of Rectangle and Circle
Use a loop to call draw() on each

homework_21
Create a class CopyEntity with a static method copyObject() that copies any object:

js
Kopieren
Bearbeiten
const arr1 = [1, 2, 3];
const arr2 = CopyEntity.copyObject(arr1);

arr1[0] = 999;
console.log(arr1); // [999, 2, 3]
console.log(arr2); // [1, 2, 3]
homework_22
Create a function that changes the background color of an element every second, choosing randomly from:

js
Kopieren
Bearbeiten
const colors = ['#ff0000', '#00ff00', '#0000ff'];
homework_23
Create a function that builds a list from an array.
Each list item must have a button to delete that item from the list.

homework_24
Create a modal window using the <dialog> tag
Add custom styles, animations, and gradients
Create markup
Add logic to open/close the modal
Style the modal background
Add functionality to close modal by clicking outside it
