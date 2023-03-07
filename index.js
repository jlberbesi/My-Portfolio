const homeMenu = document.getElementById('humMenu');
const navCo = document.getElementById('nav_list_container');
const closeBtn = document.getElementById('close-btn');
const body = document.getElementById('body');
const homeBtn = document.getElementById('home-btn');
const projectsBtn = document.getElementById('projects-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const headerDesign = document.getElementById('shape2');
const shape1 = document.getElementById('shape1');

homeMenu.addEventListener('click', () => {
  navCo.style.display = 'flex';
  navCo.style.height = '100vh';
  closeBtn.style.display = 'block';
  homeMenu.style.display = 'none';
  body.style.position = 'sticky';
  body.style.overflow = 'hidden';
  headerDesign.style.display = 'none';
  shape1.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  navCo.style.display = 'none';
  homeMenu.style.display = 'block';
  body.style.position = 'static';
  body.style.overflow = 'auto';
  headerDesign.style.display = 'block';
  shape1.style.display = 'block';
});

homeBtn.addEventListener('click', () => {
  navCo.style.display = 'none';
  homeMenu.style.display = 'block';
  body.style.position = 'static';
  body.style.overflow = 'auto';
  headerDesign.style.display = 'block';
  shape1.style.display = 'block';
});

projectsBtn.addEventListener('click', () => {
  navCo.style.display = 'none';
  homeMenu.style.display = 'block';
  body.style.position = 'static';
  body.style.overflow = 'auto';
  headerDesign.style.display = 'block';
  shape1.style.display = 'block';
});

aboutBtn.addEventListener('click', () => {
  navCo.style.display = 'none';
  homeMenu.style.display = 'block';
  body.style.position = 'static';
  body.style.overflow = 'auto';
  headerDesign.style.display = 'block';
  shape1.style.display = 'block';
});

contactBtn.addEventListener('click', () => {
  navCo.style.display = 'none';
  homeMenu.style.display = 'block';
  body.style.position = 'static';
  body.style.overflow = 'auto';
  headerDesign.style.display = 'block';
  shape1.style.display = 'block';
});
