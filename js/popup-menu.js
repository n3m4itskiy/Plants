const btnBurger = document.querySelector(".header__burger-btn");
const menu = document.querySelector(".popup");

function handleMenu() {
    menu.classList.toggle('popup-active');
}

btnBurger.addEventListener('click', handleMenu);
