const navToggle = document.querySelector('.nav-links');

const hamburger = document.querySelector('.nav-toggler');

hamburger.addEventListener('click', () => {
  navToggle.classList.toggle('nav-active');
})