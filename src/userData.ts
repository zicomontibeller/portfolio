import { IAbout } from "./components/SectionAbout";
import { ISkill } from "./components/SectionSkills";
import { IExperience } from "./components/SectionExperience";
import { IProject } from "./components/SectionProjects";

export type User = {
  about: IAbout
  skills: ISkill[]
  experiences: IExperience[]
  projects: IProject[]
}

export const userData:User = {
  about: {
    avatarUrl: "/img/zico-montibeller.jpg",
    name: "Zico Montibeller",
    email: "zico.montibeller@gmail.com",
    tags: ["Front-End Engineer"],
    githubUrl: "https://github.com/zicomontibeller",
    linkedinUrl: "https://www.linkedin.com/in/zicomontibeller/",
    cvUrl: "/ZicoMontibellerCV.pdf",
    instagramUrl: "https://www.instagram.com/zico.montibeller/",
    biography: [
      "As a passionate front-end enthusiast, I've cultivated expertise across a spectrum of languages, frameworks, and tools, primarily within the realm of front-end development.", "I thrive in fast-paced environments and have a strong desire to continually grow and master my craft. I relish the challenges that come with working in dynamic settings, as they push me to constantly expand my skillset and stay at the forefront of industry trends. With a natural curiosity and an insatiable thirst for knowledge, I possess the ability and the drive to quickly learn new concepts and technologies, allowing me to adapt to ever-evolving landscapes with ease trough effective communication and time management.", "Born and raised in Jaraguá do Sul (JS for short), I find it amusing that I ended up developing a passion for working with Javascript (also JS for short). It's almost as if it was destined for me to immerse myself in the world of JS, given the connection to my hometown's initials. This serendipitous connection adds an extra layer of joy and purpose to my work.", "In my spare time, I am an amateur musician, playing both the double bass in my city's orchestra and the bass guitar in my rock band. I also enjoy travelling and solving puzzles, whether it be unraveling escape rooms or challenging my mind with custom sudokus."
    ],
    interests: [],
    education: [
      {
        title: "Bachelor of Computer Science",
        subtitle: "Valedictorian Speech",
        subtitleUrl: "https://www.youtube.com/watch?v=i4T6QyBxkNA",
        year: 2014,
        institution: "UFSC - Universidade Federal de Santa Catarina",
        location: "Florianópolis, SC - Brazil"
      },
      {
        title: "Electronics Technician",
        year: 2006,
        institution: "SENAI - Serviço Nacional de Aprendizagem Industrial",
        location: "Jaraguá do Sul, SC - Brazil",
      }
    ]
  },
  skills: [
    {
      name: 'angular',
      description: 'Angular',
      rating: 100,
    },
    {
      name: 'react',
      description: 'ReactJS',
      rating: 100,
    },
    {
      name: 'vue',
      description: 'VueJS',
      rating: 70,
    },
    {
      name: 'node',
      description: 'Node.js',
      rating: 100,
    },
    {
      name: 'rails',
      description: 'Ruby on Rails',
      rating: 80,
    },
    {
      name: 'nextjs',
      description: 'Next.js',
      rating: 100,
    },
    {
      name: 'tailwind',
      description: 'Tailwind',
      rating: 100,
    },
    {
      name: 'css',
      description: 'CSS',
      rating: 99,
    },
    {
      name: 'electron',
      description: 'ElectronJS',
      rating: 90,
    },
    {
      name: 'mysql',
      description: 'MySQL',
      rating: 90,
    },
    {
      name: 'bass',
      description: 'Double Bass',
      rating: 90,
    },
    {
      name: 'composition',
      description: 'Classical Composer',
      rating: 60,
    }
  ],
  experiences: [
    {
      name: 'Fullstack (FE-Heavy) Engineer',
      company: {
        name: 'Wolven',
        subtitle: 'Consultancy on user experience and front end development',
        url: 'http://www.wolven.com.br'
      },
      description: 'Crafting optimal web solutions across diverse platforms, with an unwavering commitment to delivering the ultimate user experience.',
      location: 'Home Office',
      period: 'October 2012 - April 2023'
    },
    {
      name: 'Software Engineer',
      company: {
        name: 'CONPEDI',
        subtitle: 'Conselho Nacional de Pesquisa e Pós-graduação em Direito – UFSC (National Council of Research and Post-graduation in Law at UFSC)',
        url: 'http://conpedi.org.br'
      },
      description: 'Design and develop the web app “publicaDireito” for the company to receive, evaluate, edit and publish academic articles.',
      location: 'Florianópolis - SC',
      period: 'September 2010 - September 2012'
    },
    {
      name: 'Web Developer',
      company: {
        name: 'LAED',
        subtitle: 'Laboratório de Ensino a Distância – UFSC (Distance Learning Laboratory at UFSC)',
        url: 'http://led.ufsc.br'
      },
      description: 'Engaged in multiple enhancements for a custom implementation of Moodle, an open source learning platform.',
      location: 'Florianópolis - SC',
      period: 'March 2008 - August 2010'
    }
  ],
  projects: [
    {
      name: 'Portfolio',
      companyName: 'Zico Montibeller',
      companyUrl: 'http://www.zicomontibeller.dev',
      imgUrl: '/img/zico-fisl.jpg',
      description: ["As a means to stay updated with the latest technologies and also provide a platform to highlight my skills, experiences, and achievements in an engaging and visually appealing way. Through the utilization of NextJS and ReactJS, I have been able to create a dynamic and user-friendly portfolio that represents my dedication to continuous growth and improvement in the field of web development.", "Furthermore, this project allowed me to showcase my ability to design and structure information effectively. By carefully curating the content and organizing it into easily navigable sections, I aimed to provide visitors with a comprehensive overview of my professional journey."],
      techs: ['ReactJS', 'NextJS', 'Typescript', 'Tailwind']
    },
    {
      name: 'RPV311 Configurator',
      companyName: 'General Electric',
      companyUrl: 'http://ge.com',
      imgUrl: '/img/ge-energy.jpg',
      url: 'https://www.gegridsolutions.com/measurement_recording_timesync/catalog/rpv311.htm',
      description: ["The processing unit RPV311 is a multifunction equipment, developed by General Eletric, that offers a distributed solution designed for the acquisition, monitoring and recording of electrical power generation, transmission or distribution.", " In this project I spearheaded the development of the desktop app that allowed users to configure the RPV311 settings and monitor its status in an ease way. App screenshots in <a href='https://drive.google.com/drive/folders/1BR6hCVHqv27icVZblffjefH5MKRjSfwk?usp=drive_link' target='_blank'>this link</a>."],
      techs: ['ElectronJS', 'Angular', 'Typescript', 'NodeJS', 'Tailwind', 'XML', 'Websocket', 'Storybook', 'Jest']
    },
    {
      name: 'Paywall',
      companyName: 'Couchsurfing',
      companyUrl: 'https://couchsurfing.com',
      imgUrl: '/img/cs.jpg',
      description: ["CouchSurfing is a hospitality exchange service by which users can request free short-term homestays or interact with other people who are interested in travel.", "Along wtih the web team, we developed several experiments and improvements on Couchsurfing's web platform. Our biggest challenge was to implement a paywall and change its service from user single sign in to be based on user monthly/yearly paid subscriptions, integrating different payments options."],
      techs: ['Ruby on Rails', 'ReactJS', 'Paypal', 'Stripe', 'Mapbox', 'Cypress', 'Cucumber', 'MySQL', 'Docker']
    },
    {
      name: 'IoT App',
      companyName: 'WEG',
      companyUrl: 'https://weg.net',
      url: 'https://iot.weg.net',
      imgUrl: '/img/weg-iot-2.jpg',
      description: ["This innovative app empowers users to seamlessly oversee their residential solar energy systems alongside a suite of other devices offered by the company.", "I engineered the hybrid mobile application and publish its first version for both Apple's and Google's stores. Post the initial release, I assumed the role of instructor, imparting my knowledge to a team of developers, elucidating the intricacies of the app's architecture, and advocating best coding practices to facilitate continuous enhancements"],
      techs: ['AngularJS', 'Cordova', 'Bootstrap', 'Sass', 'Jest', 'Azure OAuth']
    },
    {
      name: 'Factory Monitor',
      companyName: 'WEG',
      companyUrl: 'https://weg.net',
      imgUrl: '/img/weg.jpg',
      description: ["Operating worldwide, WEG provides global solutions in the electric engineering, power and automation technology areas. With over a million square meters of commercial and industrial premises, they needed an app to monitor their most valuable subsidized factories.", "I engineered the front-end of this private desktop web app to be touchscreen and to show the status of every feature for every machine in a specific factory in real-time. App screenshots in <a href='https://drive.google.com/file/d/1fc-htMTkydVZ3bxqEUYmBOeRfuHS7C0K/view?usp=drive_link' target='_blank'>this link</a>."],
      techs: ['VueJS', 'HighchartsJS', 'Typescript', 'Rest API', 'Swagger']
    },
  ]
}

export const userName:string = userData.about.name;