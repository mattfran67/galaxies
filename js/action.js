var nav = document.querySelector('nav');

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add('nav-scroll-bttm');
    nav.classList.remove('nav-scroll-top');
  } else {
    nav.classList.remove('nav-scroll-bttm');
    nav.classList.add('nav-scroll-top');
  }
});

function dBlock() {
  nav.classList.toggle("respnv");
}
