const menuPhone = document.querySelector('.menu-phone');
const menuButton = document.querySelector('.header-left__menu-button');
const minimize = document.querySelector('.minimize');
const firstMenu = document.querySelector('.menu');
const profileButton = document.querySelector('.profil-button');
const closeButton = document.querySelector('.close-menu-button');
menuButton.addEventListener('click', ()=>{
    firstMenu.classList.remove('active');
    menuPhone.classList.remove('menu-phone-move');
    firstMenu.classList.remove('menu-move');
    profileButton.classList.remove('profil-button-before');
    exitButton.classList.remove('new-exitbutton-position');
    minimize.style.display = 'inline';
    closeButton.style.display = 'none';
    firstMenu.classList.add('active');
    minimize.style.display = 'none';
    exitButton.classList.add('new-exitbutton-position');
    menuPhone.classList.add('menu-phone-move');
    firstMenu.classList.add('menu-move');
    profileButton.classList.add('profil-button-before');
    closeButton.style.display = 'inline';
});
closeButton.addEventListener('click', ()=>{
    firstMenu.classList.remove('active');
    menuPhone.classList.remove('menu-phone-move');
    firstMenu.classList.remove('menu-move');
    profileButton.classList.remove('profil-button-before');
    exitButton.classList.remove('new-exitbutton-position');
    minimize.style.display = 'inline';
    closeButton.style.display = 'none';
});
window.addEventListener('resize', ()=>{
    if (window.innerWidth > 700) {
        firstMenu.classList.remove('menu-move');
        firstMenu.classList.remove('active');
        menuPhone.classList.remove('menu-phone-move');
        profileButton.classList.remove('profil-button-before');
        exitButton.classList.remove('new-exitbutton-position');
        minimize.style.display = 'flex';
        closeButton.style.display = 'none';
    }
});

//# sourceMappingURL=task-sfx.2741dc12.js.map
