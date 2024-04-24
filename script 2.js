console.log("Script: Algemeen");

// NAVBAR
let menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('show-menu');
}


function saveScrollPosition() {
  var stateObj = { scrollTop: window.pageYOffset };
  history.pushState(stateObj, "", window.location.href);
}

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.scrollTop) {
    window.scrollTo(0, event.state.scrollTop);
  }
});

window.addEventListener('scroll', function() {
  saveScrollPosition();
});

if (document.referrer == 'http://localhost:9000/inloggen') {
  document.getElementById('backButton').href = 'http://localhost:9000/'
} else {
document.getElementById('backButton').href = document.referrer
}





function discoGroen() {
  document.documentElement.style.setProperty('--accent1', 'green');
}

function discoRoze() {
  document.documentElement.style.setProperty('--accent1', 'hotpink');
}

function discoRood() {
  document.documentElement.style.setProperty('--accent1', 'red');
}

window.addEventListener('load', function() {
  var savedColor = localStorage.getItem('accentkleur');
  if (savedColor) {
      document.documentElement.style.setProperty('--accent1', savedColor);
  }
});



