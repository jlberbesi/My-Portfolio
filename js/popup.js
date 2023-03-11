import cardData from './cardInfo.js';

const { Cards } = cardData;
const project = document.body.querySelector('#project-section');
const popUpWindow = document.body.querySelector('#popup-window');
const body = document.getElementById('body');
const navCo = document.getElementById('nav_list_container');
const closeBtn = document.getElementById('close-btn');
const homeMenu = document.getElementById('humMenu');
const homeBtn = document.getElementById('home-btn');
const projectsBtn = document.getElementById('projects-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const headerDesign = document.getElementById('shape2');
const shape1 = document.getElementById('shape1');
const form = document.querySelector('#myForm');

function generateCard(card) {
  return `
    <div class="card desktop-card${card.description.key}">
        <div class="img img${card.description.key}">
            <img id="project_img${card.description.key}" src="${card.img.src}" alt="${card.img.alt}">
        </div>
        <div class="project_description">
            <h2 class="project_name">${card.description.name}</h2>
            <ul>
                <li><button>${card.description.technologies[0]}</button></li>
                <li><button>${card.description.technologies[1]}</button></li>
                <li><button>${card.description.technologies[2]}</button></li>
            </ul>
            <button id="project-btn" class="see_project">
                <p>${card.description.btnText}</p>
                <img class="union" src="assets/shapes/Union.png">
        </button>
        </div>
    </div>
    `;
}

function generatePopup(card) {
  return `
            <div class="popup-container">
            <h2 class="popup-header">${card.description.name}</h2>
            <ul>
                <li><button>${card.description.technologies[0]}</button></li>
                <li><button>${card.description.technologies[1]}</button></li>
                <li><button>${card.description.technologies[2]}</button></li>
            </ul>
            <div id= "project-img">
                <svg class="back-arrow" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.95519 13.5361L7.2334 7.25792L0.95519 0.979715" stroke="white" stroke-width="2"/>
                </svg>
                <svg class="forward-arrow" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11366 13.5361L1.83545 7.25792L8.11366 0.979715" stroke="white" stroke-width="2"/>
                </svg>
                <img src="${card.img.src}" alt="${card.img.src}">
                            
    
            </div>
            <div id="sub-images">
                <div class=" sub sub1"><img src="${card.img.src}" alt="${card.img.src}"></div>
                <div class="sub"><img src="${card.img.src}" alt="${card.img.src}"></div>
                <div class="sub"><img src="${card.img.src}" alt="${card.img.src}"></div>
                <div class="sub"><img src="${card.img.src}" alt="${card.img.src}"></div>
            </div>
            <div class="text-section">
            <p>${card.description.paragraph}</p>
            <p>${card.description.paragraph}</p>
            <div class="btn-container">
            <div class="seeBtn">
                <p>See Live</p>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6002 1.73246H19.0425L8.78761 11.9874L10.0126 13.2124L20.2675 2.95755V9.39982H22V0.866231V0H21.1338H12.6002V1.73246ZM0.866231 3.19972H5.1333V4.93219H1.73246V20.2669H17.0672V16.8666H18.7996V21.1331V21.9994H17.9334H0.866231H0V21.1331V4.06596V3.19972H0.866231Z" fill="#1A2236"/>
                </svg>
            </div>
            <div class="seeBtn">
                <p>See Source</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0.5C5.37 0.5 0 5.78 0 12.292C0 17.503 3.438 21.922 8.205 23.48C8.805 23.591 9.025 23.226 9.025 22.913C9.025 22.633 9.015 21.891 9.01 20.908C5.672 21.619 4.968 19.326 4.968 19.326C4.422 17.965 3.633 17.601 3.633 17.601C2.546 16.87 3.717 16.885 3.717 16.885C4.922 16.967 5.555 18.1 5.555 18.1C6.625 19.903 8.364 19.382 9.05 19.081C9.158 18.318 9.467 17.799 9.81 17.504C7.145 17.209 4.344 16.195 4.344 11.677C4.344 10.39 4.809 9.338 5.579 8.513C5.444 8.215 5.039 7.016 5.684 5.392C5.684 5.392 6.689 5.076 8.984 6.601C9.944 6.339 10.964 6.209 11.984 6.203C13.004 6.209 14.024 6.339 14.984 6.601C17.264 5.076 18.269 5.392 18.269 5.392C18.914 7.016 18.509 8.215 18.389 8.513C19.154 9.338 19.619 10.39 19.619 11.677C19.619 16.207 16.814 17.204 14.144 17.494C14.564 17.848 14.954 18.571 14.954 19.676C14.954 21.254 14.939 22.522 14.939 22.905C14.939 23.214 15.149 23.583 15.764 23.465C20.565 21.917 24 17.495 24 12.292C24 5.78 18.627 0.5 12 0.5Z" fill="#1A2236"/>
                </svg>                
            </div>
            </div>
            <div class="popup-footer">
                <div>
                    <img src="assets/shapes/Union (2).png" alt="back arrow">
                    <a href="#Next-project">Previous project</a>
                </div>
                <div>
                    <a href="#Next-project">Next project</a>
                    <img src="assets/shapes/Union (3).png" alt="back arrow">
                </div>
            </div>
            </div>
            </div>
    `;
}

Cards.forEach((card) => {
  project.innerHTML += generateCard(card);
  const seeProject = document.body.querySelectorAll('#project-btn');

  seeProject.forEach((button) => {
    button.addEventListener('click', () => {
      popUpWindow.innerHTML += generatePopup(card);
      popUpWindow.style.display = 'block';
      body.children[1].style.display = 'none';
      window.scrollTo(0, 0);
      const popupCloseBtn = document.querySelector('#popup-close-btn');
      popupCloseBtn.addEventListener('click', () => {
        popUpWindow.style.display = 'none';
        body.children[1].style.display = 'block';
      });
    });
  });
});

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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.forms['myForm']['email'].value;
  var reg = /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  if (reg.test(name) == false) {
    form.children[4].innerHTML = "Please remove all caps from email";
  }else {
    form.children[4].innerHTML = "";
    form.submit();
  }
})
