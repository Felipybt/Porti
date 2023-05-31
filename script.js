var typed = new typed("span",{
    strings:["Felipy Godinho.","web Developer.","UX Designer.",],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

const menuHamburger = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu');

function menuactive() {
    document.querySelector('.background header').classList.toggle('active');
    
}