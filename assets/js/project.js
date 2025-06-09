AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Distrito Creativo",
    cardImage: "assets/images/project-page/lienzo.png",
    description: "",
    tagimg: "",
    Previewlink: "https://arquitecturavb.blogspot.com/2025/01/lienzo-distrito-creativo.html",
    Githublink: "https://arquitecturavb.blogspot.com/2025/01/lienzo-distrito-creativo.html",
  },
  {
    title: "Museo de Marmol",
    cardImage: "assets/images/project-page/marmol.jpg",
    description: "",
    tagimg: "",
    Previewlink: "https://arquitecturavb.blogspot.com/2025/01/museo-del-marmol.html",
    Githublink: "https://arquitecturavb.blogspot.com/2025/01/museo-del-marmol.html",
  },
  {
    title: "Solahis",
    cardImage: "assets/images/project-page/solahis.png",
    description: "",
    tagimg: "",
    Previewlink: "https://arquitecturavb.blogspot.com/2025/01/fundacion-solahis-espacio-educativo-y.html",
    Githublink: "https://arquitecturavb.blogspot.com/2025/01/fundacion-solahis-espacio-educativo-y.html",
  },
  {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    title: "Ciudad Jardín",
    cardImage: "assets/images/project-page/ciudad_jardin.png",
    description: "",
    tagimg: "",
    Previewlink: "https://arquitecturavb.blogspot.com/2025/01/ciudad-jardin-unidad-de-actuacion-p.html",
    Githublink: "https://arquitecturavb.blogspot.com/2025/01/ciudad-jardin-unidad-de-actuacion-p.html",
  },
  {
    title: "Escritorio Pizarra",
    cardImage: "assets/images/project-page/escritorio.png",
    description: "",
    tagimg: "",
    Previewlink: "https://arquitecturavb.blogspot.com/2025/01/escritorio-biblioteca-apartamento.html",
    Githublink: "https://arquitecturavb.blogspot.com/2025/01/escritorio-biblioteca-apartamento.html",
  },
  {
    title: "Ágora del Río",
    cardImage: "assets/images/project-page/agora_del_rio.png",
    description: "",
    tagimg: "",
    Previewlink: "https://arquitecturavb.blogspot.com/2025/06/agora-del-rio.html",
    Githublink: "https://arquitecturavb.blogspot.com/2025/06/agora-del-rio.html",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px "data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="10" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}" target="blank">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
