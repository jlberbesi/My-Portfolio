const navCo = document.getElementById('nav_list_container');
const closeBtn = document.getElementById('close-btn');
const homeMenu = document.getElementById('humMenu');
const body = document.getElementById('body');
const homeBtn = document.getElementById('home-btn');
const projectsBtn = document.getElementById('projects-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const headerDesign = document.getElementById('shape2');
const shape1 = document.getElementById('shape1');
const seeProject = document.querySelectorAll('.see_project');
const popUpWindow = document.getElementById('popup-window');
const popupCloseBtn = document.getElementById('popup-close-btn');
const card = document.querySelectorAll(".card");



function onLoad (){
  card.forEach((card)=>{
    let arrayIndex = 0;
    console.log('x');
    card.children[1].children[0].innerHTML = projectData[arrayIndex].name;
    card.children[1].children[1].children[0].children[0].innerHTML = projectData[arrayIndex].list1;
    console.log(card.children[1].children[1].children[0].children[0].innerHTML);
    card.children[1].children[1].children[1].children[0].innerHTML = projectData[arrayIndex].list2;
    card.children[1].children[1].children[2].children[0].innerHTML = projectData[arrayIndex].list3;
    card.children[1].children[2].children[0].innerHTML = projectData[arrayIndex].p;
    arrayIndex++;
  })
}

onLoad();

projectData.map((item)=>{
  item.seeProjectBtn.addEventListener('click', ()=>{
    popUpWindow.classList.toggle('popup-window-active');
    popUpWindow.children[1].innerHTML = item.name;
    popUpWindow.children[5].innerHTML = item.description;
    popUpWindow.children[6].innerHTML = item.description;
    popUpWindow.children[3].appendChild(item.image);
    item.image.setAttribute("src",item.image_src);
    popUpWindow.children[4].children[0].appendChild(item.image.cloneNode(true));
    popUpWindow.children[4].children[1].appendChild(item.image.cloneNode(true));
    popUpWindow.children[4].children[2].appendChild(item.image.cloneNode(true));
    popUpWindow.children[4].children[3].appendChild(item.image.cloneNode(true));
    popUpWindow.children[2].children[0].children[0].innerHTML = item.list1;
    popUpWindow.children[2].children[1].children[0].innerHTML = item.list2;
    popUpWindow.children[2].children[2].children[0].innerHTML = item.list3;
    body.children[1].style.display = 'none';
    window.scrollTo(0, 0);
    body.style.overflow = 'none';
  })

  popupCloseBtn.addEventListener('click', ()=>{
    popUpWindow.children[3].removeChild(item.image);
    popUpWindow.classList.toggle('popup-window-active');
    body.children[1].style.display = 'block';
    popUpWindow.children[4].children[0].removeChild(item.image.cloneNode(true));
    popUpWindow.children[4].children[1].removeChild(item.image.cloneNode(true));
    popUpWindow.children[4].children[2].removeChild(item.image.cloneNode(true));
    popUpWindow.children[4].children[3].removeChild(item.image.cloneNode(true));
  })
})

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
