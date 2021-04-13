const linkMenuHeaders = document.getElementsByClassName("a-big");
const burgerButton = document.querySelector(".btn-hamburger-menu");

burgerButton.addEventListener('click', clickBurgerHandler)

Array.from(linkMenuHeaders).forEach((element, index, linkMenuHeaders) => {
    element.addEventListener('click', clickLinkHandler.bind(null, element))
})

function clickLinkHandler(element) {
    element.classList.toggle('active-link-menu')
}

function clickBurgerHandler() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle('menu-slide');
}