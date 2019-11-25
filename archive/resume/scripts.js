const sidebar = document.querySelector('aside');
const profilePic = document.getElementById('profilePic');
const preloader = document.getElementById('preLoader');
const contentSections = document.getElementById("contentSections");

window.onload = function() {
  handlePreload(preloader);
  
  setTimeout(function() {
    removeClass(sidebar, 'loading');
    removeClass(profilePic, 'loading');
  }, 300);
};

window.addEventListener('scroll', function(){ 
  let scrollpos = window.scrollY;

  if(scrollpos > 133) {
    addClass(contentSections, 'fixed');
  } else {
    removeClass(contentSections, 'fixed');
  }
});

function handlePreload(e) {
  addClass(e, 'preload-stop');
  
  setTimeout(function() {
    e.style.display = 'none'
  }, 500);
}

function addClass(e, c) {
    e.classList.add(c);
}

function removeClass(e, c) {
    e.classList.remove(c);
}

