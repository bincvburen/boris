let menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('show-menu');
  menu.classList.toggle('show');
}


function checkScreenSize() {
  if (window.matchMedia("(min-width: 600px)").matches) {
      // Als de schermbreedte kleiner is dan of gelijk is aan 600px
      menu.classList.remove('show-menu');
      menu.classList.remove('show');
  }}

  window.addEventListener('resize', checkScreenSize);