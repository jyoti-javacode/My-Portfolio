// Home_Page.js

const navToggle = document.getElementById('nav-toggle');  // Menu button
const navMenu = document.getElementById('nav-menu');      // Menu list
const navClose = document.getElementById('nav-close');    // Close button

navToggle.addEventListener('click', () => {
    navMenu.style.right = '0';  // Opens the menu
});

navClose.addEventListener('click', () => {
    navMenu.style.right = '-100%';  // Closes the menu
});
var typed = new Typed('#element', {
    strings: ['Java Developer', 'Web Designer', 'Frontend Developer'],
    typeSpeed: 50,
});