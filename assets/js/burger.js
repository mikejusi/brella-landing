let burger__menu = document.querySelector('.burger__menu');
let head__link = document.querySelector('.head__link');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

burger__menu.onclick = function(){
    burger__menu.classList.toggle('active');
    head__link.classList.toggle('active__panel');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}