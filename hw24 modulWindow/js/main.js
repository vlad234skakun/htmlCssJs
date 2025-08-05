document.addEventListener('DOMContentLoaded',() =>{
    const navMenu = document.getElementById('navMenu')
    const openButton = document.getElementById('openButton')
    const closeButton = document.getElementById('closeButton')
    const menuItems = document.querySelectorAll('.nav-menu__item')

    function toggleMenu(){
        navMenu.classList.toggle('nav-menu--open')
    }

    function toggleSubmenu(submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'    
    }
    
    openButton.addEventListener('click',()=>{
        toggleMenu();
    })
    closeButton.addEventListener('click',()=>{
        toggleMenu();
    })


    //Создаем подменю
    function createSubmenu(id) {
        const submenu = document.createElement('div')
        submenu.classList.add('submenu')
        submenu.innerHTML = `
        <div class="submenu__item">${id}.1 Element</div>
        <div class="submenu__item">${id}.2 Element</div>`
        return submenu;
    }

    //Создаем добавление подменю в меню
    menuItems.forEach((item , index) => {
        const submenu = createSubmenu(index + 1)
        // item.appendChild(submenu);
        item.insertAdjacentElement('afterend', submenu);
        item.addEventListener('click',()=>{
            toggleSubmenu(submenu)
        });
        //Прятать подпункты меню при нажатии на них
        submenu.querySelectorAll('.submenu__item').forEach(submenuItem => {
            submenuItem.addEventListener('click', (event) => {
                event.stopPropagation(); // Останавливаем всплытие события
                submenu.style.display = 'none';
            });
    });

})
})
