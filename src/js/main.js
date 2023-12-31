import '../scss/style.scss';

// Functions to open and close the menu with animations

const navToggle = document.querySelector('#navToggle');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-faded');

navToggle.addEventListener('click', () => {
  console.log('Open the menu');

  if (header.classList.contains('open')) { // Close the menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
  } else { // Open the menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
  }
})