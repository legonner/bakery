'use strict';

const mobileMenu = getElement('.mobile-menu'),
      menuBtnOpen = getElement('.menu-btn-open'),
      menuBtnClose = getElement('.menu-btn-close');
      
const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
