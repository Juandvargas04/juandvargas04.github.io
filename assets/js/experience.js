AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Local Comercial Xiaomi – Clinica del play",
    cardImage: "assets/images/experience-page/local_xiaomi.png",
    place: "Centro comercial Florida, Medellín",
    time: "(Ago - Oct, 2024)",
    desp: "Este proyecto, ubicado en el Parque Comercial Florida en Medellín, surgió con el objetivo de integrar dos marcas en un solo local comercial: Xiaomi Medellín y Clínica del Play. Mi responsabilidad fue conceptualizar y diseñar un espacio que fusionara ambas identidades de manera coherente, respetando sus valores y creando una experiencia única para los clientes. El corazón del proyecto fue desarrollar una propuesta que mantuviera la esencia de cada marca, ofreciendo un ambiente funcional y atractivo para los usuarios.",
    link: "https://arquitecturavb.blogspot.com/2025/01/local-comercial-xiaomi-clinica-del-play.html",
  },
  {
    title: "Auxiliar de diseño – Ben Fatto S.A.S",
    cardImage: "assets/images/experience-page/ben_fatto.png",
    place: "Medellín",
    time: "(Jun - Julio, 2024)",
    desp: "Ben Fatto (benfattosas.com) es una empresa especializada en el diseño e instalación de carpintería arquitectónica industrializada. Se enfocan en la creación y montaje de cocinas integrales, closets y muebles de baño, adoptando un concepto de organización racional. Su propuesta se destaca por ofrecer las mejores distribuciones, calidad y precios en cada uno de sus proyectos.",
    link: "https://arquitecturavb.blogspot.com/2025/01/auxiliar-de-diseno-ben-fatto-sas.html",
  },
  {
    title: "Renovación de closets – Apartamento en Laureles",
    cardImage: "assets/images/experience-page/closets.jpg",
    place: "Medellín",
    time: "(Dic 2024)",
    desp: "Se realizó el desmonte de tres closets antiguos en madera triple entamborada que se querían renovar con un aglomerado nuevo, y se diseñaron los nuevos muebles.",
    link: "https://arquitecturavb.blogspot.com/2025/01/renovacion-de-closets-apartamento-en.html",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp, link }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
            <p class="meta">
              <a href="${link}" target="_blank" rel="noopener noreferrer">Mas información</a>
            </p>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Autocad",
    cardImage: "assets/images/experience-page/autocad_logo.png",
    description:
      "",
  },
  {
    title: "Revit",
    cardImage: "assets/images/experience-page/revit_logo.png",
    description:
      "",
  },
  {
    title: "Twinmotion",
    cardImage: "assets/images/experience-page/twinmotion_logo.png",
    description:
      "",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 300px;width:250px">
      
      <img src="${cardImage}" height="200" width="20" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

/* const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "/home/agvargasb/Documentos/JD/Web_Personal/assets/images/experience-page/autocad_logo.jpg",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is  an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
]; */

/* const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3); */
