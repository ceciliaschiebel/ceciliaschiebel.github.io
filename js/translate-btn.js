(function () {
  'use strict'

  var engTranslation = {
    aboutTitle: 'Summary',
    aboutContent: "I'm Cecilia Schiebel, frontend developer, web designer and entrepreneur.<br>Since childhood I like to design and create new things, always thinking about how people are going to use them. That's why I started Poffly and Mergus while studying computer science, and I worked on different software projects with Meg and Elvex.<br>I am always open to new projects where I can add value and learn from the expertise of other people.",
    skillsTitle: 'Technical Skills',
    technologiesSubt: 'Technologies',
    advancedHead: 'Advanced:&nbsp',
    intermediateHead: 'Intermediate:&nbsp',
    beginnerHead: 'Beginner:&nbsp',
    realtedSubt: 'Related skills',
    realtedBody: 'Scalable Vector Graphics (SVG), UI/UX Design, Interface Layout, Responsive Design',
    languagesSubt: 'Languages',
    languagesBody: 'Spanish (native), English (intermediate-advanced)',

    experienceTitle: 'Experience',
    dateMergus: 'November 2015 – present',
    descriptionMergus: "In Mergus Design we are dedicated to provide development, design and illustration services for digital projects.<br> I'm currently working in:",
    highlightsMergus: `<li> Web Application Development </li>
        <li> Management and accounting </li>
        <li> Consulting and customer service </li>
        <li> Responsive UI/UX design with Bootstrap 3, HTML5 </li>
        <li> SVG Web Animation with JS, CSS3 </li>
        <li> Creating LESS and Sass themes </li>`,

    datePoffly: 'July 2012 – present',
    descriptionPoffly: `In Poffly we create cases and bags made to protect all kinds of gadgets.
    <br>
    I started the project while studying in the university, and it gave me the opportunity to learn about administration, advertising, customer service and meet so many entrepreneurs.
    <br>
    Our goal was to create the best brand and products as possible, so today I can say that I am glad with the results. We also receive excellent reviews from our customers, which are available on our <a href="https://www.facebook.com/pg/poffly/reviews/" target="_blank">facebook page</a>.
    <br>
    Due to work we are maintaining the project passively, I am currently working on:`,
    highlightsPoffly: `<li> Project maintenance </li>`,

    dateElvex: 'August 2011 – present',
    descriptionElvex: `I began to collaborate in ELVEX with sporadic works, since mid-2011, with Informática MEG's team. After the closing of MEG I continued working on some projects with ELVEX, until today.
        <br>
        I'm currently working at:`,
    highlightsElvex: `<li> Development of management system with AngularJS, Twig and JS </li>
        <li> Interface layout with Bootstrap 3, HTML5 and CSS3 </li>`,

    dateMeg: 'February 2011 – March 2015',
    descriptionMeg: `My work with Informática Meg began mainly with design tasks, soon I started to make the layout of sites and applications, and then I joined the team as a developer.
        <br>
        Among the works I did are included:`,
    highlightsMeg: `<li> Creating logos and icons for applications </li>
        <li> Designing and creating the company's website </li>
        <li> Site and application layout with Bootstrap, Jade and Stylus </li>
        <li> Front-end development of management applications </li>
        <li> UI/UX design, wireframing </li>`,

    educationTitle: 'Education',
    educationBody: `Advanced student – Analista en Sistemas de Computación
        <br>
        Advanced student – Licenciatura en Sistemas de Información`
  }

  var spaTranslation = {
    aboutTitle: 'Acerca de mi',
    aboutContent: `Soy Cecilia Schiebel, frontend developer, web designer y emprendedora.
    <br>
    Desde chica me gusta diseñar y crear cosas nuevas, siempre pensando en como las personas van a usarlas. Por eso cree Poffly y Mergus mientras estudiaba informática, y trabajé en distintos proyectos de software con Meg y Elvex.
    <br>
    Siempre estoy abierta a trabajar en nuevos proyectos donde pueda aportar valor y aprender de la experiencia y conocimientos de los demás.`,
    skillsTitle: 'Conocimientos',
    technologiesSubt: 'Tecnologías',
    advancedHead: 'Avanzado:&nbsp',
    intermediateHead: 'Intermedio:&nbsp',
    beginnerHead: 'Principiante:&nbsp',
    realtedSubt: 'Conocimientos relacionados',
    realtedBody: 'Scalable Vector Graphics (SVG), UI/UX Design, Maquetación, Responsive Design',
    languagesSubt: 'Idiomas',
    languagesBody: 'Español (nativo), Inglés (intermedio-avanzado)',

    experienceTitle: 'Experiencia',
    dateMergus: 'Noviembre de 2015 – actualidad',
    descriptionMergus: `En Mergus Design nos dedicamos a brindar servicios de desarrollo, diseño e ilustración, para proyectos digitales.
    <br>
    Actualmente trabajo en:`,
    highlightsMergus: `<li>Desarrollo de aplicaciones web</li>
    <li>Gestión y contabilidad</li>
    <li>Consultoría y atención a clientes</li>
    <li>Diseño UI/UX responsive con Bootstrap 3, HTML5</li>
    <li>Animación Web SVG con JS, CSS3</li>
    <li>Creación de themes LESS y Sass</li>`,

    datePoffly: 'Julio de 2012  – actualidad',
    descriptionPoffly: `En Poffly creamos fundas y bolsos hechos para proteger todo tipo de gadgets.
    <br>
    Comencé el proyecto mientras estudiaba en la universidad, y me dio la oportunidad de aprender sobre administración, publicidad, atención al cliente y conocer a muchos emprendedores.
    <br>
    Nuestro objetivo era crear la mejor marca y productos posible, así que puedo decir que estoy orgullosa de los resultados. También recibimos buenas críticas de nuestros clientes, que están disponibles en nuestra <a href="https://www.facebook.com/pg/poffly/reviews/" target="_blank">página</a>.
    <br>
    Debido al trabajo estamos manteniendo el proyecto pasivamente, actualmente trabajo en:`,
    highlightsPoffly: `<li>Mantenimiento del proyecto</li>`,

    dateElvex: 'Agosto de 2011 – actualidad',
    descriptionElvex: `Comencé a colaborar en ELVEX con trabajos esporádicos, desde mediados de 2011, junto al equipo de Informática MEG. Después del cierre de MEG seguí trabajando en algunos proyectos con ELVEX, hasta la actualidad.
    <br>
    Actualmente trabajo en:`,
    highlightsElvex: `<li>Desarrollo de sistema de gestión con AngularJS, Twig y JS</li>
    <li>Maquetación de interfaces con Bootstrap 3, HTML5 y CSS3</li>`,

    dateMeg: 'Febrero de 2011 – Marzo de 2015',
    descriptionMeg: `Mi trabajo con Informática Meg comenzó principalmente con tareas de diseño, al poco tiempo empecé a realizar la maquetación de sitios y aplicaciones, para luego integrarme al equipo como developer.
    <br>
    Entre los trabajos que realicé se encuentran:`,
    highlightsMeg: `<li>Creación de logos e iconos para aplicaciones</li>
    <li>Diseño y creación del sitio Web de la empresa</li>
    <li>Maquetación de sitios y aplicaciones con Bootstrap, Jade y Stylus</li>
    <li>Desarrollo frontend de aplicaciones de gestión</li>
    <li>UI/UX design, wireframing</li>`,

    educationTitle: 'Estudios',
    educationBody: `Alumno avanzado – Analista en Sistemas de Computación
    <br>
    Alumno avanzado – Licenciatura en Sistemas de Información`
  }


  var btnEng = document.getElementById('btnEng')
  var btnEsp = document.getElementById('btnEsp')

  var toEnglish = function () {
    if (btnEsp.classList.contains('active')) {
      btnEng.classList.add('active')
      btnEsp.classList.remove('active')

      Object.keys(engTranslation).forEach(function (key) {
        var value = engTranslation[key]
        document.getElementById(key).innerHTML = value
      })
    }
  }

  var toSpanish = function () {
    if (btnEng.classList.contains('active')) {
      btnEsp.classList.add('active')
      btnEng.classList.remove('active')

      Object.keys(engTranslation).forEach(function (key) {
        var value = spaTranslation[key]
        document.getElementById(key).innerHTML = value
      })
    }
  }

  btnEng.addEventListener('click', toEnglish)
  btnEsp.addEventListener('click', toSpanish)
}())
