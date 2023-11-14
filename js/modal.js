'use strict';

const getElement = (selector) => document.querySelector(selector);

const backdrop = getElement('.backdrop'),
      modalBtnOpen = getElement('.modal-btn-open'),
      modalBtnClose = getElement('.modal-btn-close');

const toggleModal = () => backdrop.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

