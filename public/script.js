'use strict';

// MOBILE NAV MENU
const openMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.main-nav');

openMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

closeMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});
