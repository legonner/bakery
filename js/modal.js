'use strict';

const getElement = selector => document.querySelector(selector);

const backdrop = getElement('.backdrop'),
  modalBtnOpenList = document.querySelectorAll('.modal-btn-open'),
  modalBtnClose = getElement('.modal-btn-close');

const toggleModal = () => backdrop.classList.toggle('is-hidden');

modalBtnOpenList.forEach(button =>
  button.addEventListener('click', toggleModal),
);
modalBtnClose.addEventListener('click', toggleModal);
