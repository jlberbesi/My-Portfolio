let homeMenu = document.getElementById('humMenu');
let navCo = document.getElementById('nav_list_container');
let closeBtn = document.getElementById('close-btn');
let body = document.getElementById('body');
let homeBtn = document.getElementById('home-btn');
let projectsBtn = document.getElementById('projects-btn');
let aboutBtn = document.getElementById('about-btn');
let contactBtn = document.getElementById('contact-btn');
let headerDesign = document.getElementById('shape2')
let shape1 = document.getElementById('shape1');


homeMenu.addEventListener('click', () => {
    navCo.style.display = 'flex';
    navCo.style.height = '100vh';
    closeBtn.style.display = 'block';
    homeMenu.style.display = 'none';
    //logo.style.display = 'none';
    body.style.position = 'sticky';
    body.style.overflow = 'hidden';
    //nav.style.width = '100%';
    headerDesign.style.display = 'none';
    shape1.style.display = 'none';
  } )


closeBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    headerDesign.style.display = 'block';
    shape1.style.display = 'block';
    //nav.style.width = 'auto';
  } )

  homeBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
    headerDesign.style.display = 'block';
    shape1.style.display = 'block';
  } )

  projectsBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
    headerDesign.style.display = 'block';
    shape1.style.display = 'block';
  } )

  aboutBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
    headerDesign.style.display = 'block';
    shape1.style.display = 'block';
  } )

  contactBtn.addEventListener('click', () => {
    navCo.style.display = 'none';
    homeMenu.style.display = 'block';
    //logo.style.display = 'block';
    body.style.position = 'static';
    body.style.overflow = 'auto';
    //nav.style.width = 'auto';
    headerDesign.style.display = 'block';
    shape1.style.display = 'block';
  } )