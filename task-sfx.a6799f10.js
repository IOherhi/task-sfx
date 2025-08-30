const ratingsItem = Array.from(document.querySelectorAll('.ratings-item'));
const menuUserInfo = document.querySelector('.menu-bottom__user-info');
const menuBottom = document.querySelector('.menu-bottom');
const menu = document.querySelector('.menu');
const exitButton = document.querySelector('.exit');
const minimizeButton = document.querySelector('.minimize-button');
const minimizeLine = document.querySelector('.minimize-line');
const navListItem = Array.from(document.querySelectorAll('.menu-nav__list-item'));
const ratingsText = Array.from(document.querySelectorAll('.ratings-text__span'));
const turnOff = document.querySelector('.turn-off');
/* ======================= ФУНКЦІЇ ======================== */ function expandMenu() {
    menu.classList.remove('turnOff');
    menuBottom.style.marginLeft = '16px';
    menu.style.minWidth = '260px';
    exitButton.lastElementChild.classList.add('fade-in');
    exitButton.lastElementChild.style.display = 'block';
    setTimeout(()=>{
        minimizeLine.style.position = 'relative';
        minimizeLine.style.display = 'inline';
    }, 100);
    setTimeout(()=>{
        minimizeButton.lastElementChild.style.display = 'inline';
        minimizeLine.style.position = 'relative';
        minimizeButton.firstElementChild.classList.remove('minimize-img-right');
    }, 200);
    ratingsText.forEach((item)=>{
        setTimeout(()=>{
            item.style.display = 'inline';
        }, 200);
    });
    navListItem.forEach((item)=>{
        if (item.lastElementChild) setTimeout(()=>{
            item.lastElementChild.style.display = 'inline';
        }, 200);
        item.style.width = '94%';
        item.style.gap = '12px';
        item.style.paddingLeft = '16px';
    });
    ratingsItem.forEach((item)=>{
        item.style.flexDirection = 'row';
    });
    Array.from(menuUserInfo.children).forEach((item)=>{
        item.style.display = 'block';
    });
}
function collapseMenu() {
    menu.classList.add('turnOff');
    minimizeButton.lastElementChild.style.display = 'none';
    minimizeButton.firstElementChild.classList.add('minimize-img-right');
    exitButton.lastElementChild.classList.add('fade-out');
    minimizeLine.style.position = 'absolute';
    minimizeLine.style.display = 'none';
    menuBottom.style.marginLeft = '10px';
    menu.style.minWidth = '0';
    menu.style.width = '56px';
    ratingsText.forEach((item)=>{
        item.style.display = 'none';
    });
    navListItem.forEach((item)=>{
        if (item.lastElementChild) item.lastElementChild.style.display = 'none';
        item.style.width = '100%';
        item.style.gap = '0';
        item.style.paddingLeft = '19px';
    });
    setTimeout(()=>{
        minimizeButton.lastElementChild.style.display = 'none';
        exitButton.lastElementChild.style.display = 'none';
    }, 100);
    ratingsItem.forEach((item)=>{
        item.style.flexDirection = 'column';
    });
    Array.from(menuUserInfo.children).forEach((item)=>{
        item.style.display = 'none';
    });
}
/* ===================== ОБРОБНИКИ ПОДІЙ ===================== */ minimizeButton.addEventListener('click', ()=>{
    if (menu.classList.contains('turnOff')) expandMenu();
    else collapseMenu();
});
window.addEventListener('resize', ()=>{
    if (window.innerWidth < 700) {
        menu.style.width = '100%';
        expandMenu();
    } else menu.style.width = '56px';
});

//# sourceMappingURL=task-sfx.a6799f10.js.map
