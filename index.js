let homeMenu = document.getElementById('humMenu');
let navCo = document.getElementById('nav_list_container');
let closeBtn = document.getElementById('close-btn');
let body = document.getElementById('body');
let homeBtn = document.getElementById('home-btn');
let projectsBtn = document.getElementById('projects-btn');
let aboutBtn = document.getElementById('about-btn');
let contactBtn = document.getElementById('contact-btn');


homeMenu.addEventListener('click', () => {
    navCo.style.display = 'flex';
    navCo.style.height = '100vh';
    closeBtn.style.display = 'block';
    homeMenu.style.display = 'none';
    //logo.style.display = 'none';
    body.style.position = 'sticky';
    body.style.overflow = 'hidden';
    //nav.style.width = '100%';
  } )

closeBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
  } )

  homeBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
  } )

  projectsBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
  } )

  aboutBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
  } )

  contactBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
  } )