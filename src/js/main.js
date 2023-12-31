import '../scss/style.scss';

const navToggle = document.querySelector('#navToggle');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  console.log('Open the menu');

  if (header.classList.contains('open')) { // Close the menu
    header.classList.remove('open');
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
  } else { // Open the menu
    header.classList.add('open');
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
  }
})