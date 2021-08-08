const scrollControl = document.querySelector('#scroll-top');
let scrollFunction = () => {
    let y = window.scrollY;
    if (y >= 100) {
      scrollControl.classList.remove('hide-scroll-top');
      scrollControl.classList.add('show-scroll-top');
  }

  else {
      scrollControl.classList.remove('show-scroll-top');
      scrollControl.classList.add('hide-scroll-top');
  }

}

window.addEventListener('scroll', scrollFunction);


const navToggle = document.querySelector('.nav-links');

const hamburger = document.querySelector('.nav-toggler');

hamburger.addEventListener('click', () => {
  navToggle.classList.toggle('nav-active');
})