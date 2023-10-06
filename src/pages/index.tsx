import Head from "next/head";
import { Header } from "~/components/Header";
import { IEducation, SectionAbout } from "~/components/SectionAbout";
import { IExperience, SectionExperience } from "~/components/SectionExperience";
import { IProject, SectionProject } from "~/components/SectionProjects";
import { ISkill, SectionSkills } from "~/components/SectionSkills";

// import { api } from "~/utils/api";

export default function Home() {
  const bio = [
    "As a passionate front-end enthusiast, I've cultivated expertise across a spectrum of languages, frameworks, and tools, primarily within the realm of front-end development. I wholeheartedly embrace the philosophy that every day presents a fresh opportunity to acquire new knowledge and contribute to a more user-friendly internet. In my role as a software developer, I firmly believe that a day devoid of learning aimed at enhancing coding skills is a day unfulfilled."
  ]

  const interests:string[] = [];

  const educationList:IEducation[] = [
    {
      title: "Bachelor of Computer Science",
      year: 2014,
      institution: "UFSC"
    }
  ]

  const skills:ISkill[] = [
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
      rating: 90,
    },
    {
      name: 'rails',
      description: 'Ruby on Rails',
      rating: 60,
    },
    {
      name: 'nextjs',
      description: 'Next.js',
      rating: 95,
    },
    {
      name: 'tailwind',
      description: 'Tailwind',
      rating: 100,
    },
    {
      name: 'css',
      description: 'CSS',
      rating: 85,
    },
    {
      name: 'electron',
      description: 'ElectronJS',
      rating: 95,
    },
    {
      name: 'mysql',
      description: 'MySQL',
      rating: 85,
    },
    {
      name: 'bass',
      description: 'Double Bass',
      rating: 75,
    },
    {
      name: 'composition',
      description: 'Classical Composer',
      rating: 50,
    }
  ]

  const experiences:IExperience[] = [
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
  ]

  const projects:IProject[] = [
    {
      name: 'RPV311 Configurator',
      companyName: 'General Electric',
      companyUrl: 'http://ge.com',
      imgUrl: '/img/ge-energy.jpg',
      url: 'https://www.gegridsolutions.com/measurement_recording_timesync/catalog/rpv311.htm',
      description: ["The processing unit RPV311 is a multifunction equipment, developed by General Eletric, that offers a distributed solution designed for the acquisition, monitoring and recording of electrical power generation, transmission or distribution.", " In this project I spearheaded the development of the desktop app that allowed users to configure the RPV311 settings and monitor its status in an ease way. App screenshots in <a href='https://drive.google.com/drive/folders/1BR6hCVHqv27icVZblffjefH5MKRjSfwk?usp=drive_link' target='_blank'>this link</a>."],
      techs: ['ElectronJS', 'Angular', 'NodeJS', 'Tailwind', 'XML', 'Websocket', 'Storybook', 'Jest']
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
  ];

  return (
    <>
      <Head>
        <title>Zico Montibeller - Portfolio</title>
        <meta name="description" content="Zico Montibeller's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <SectionAbout
          avatarUrl="/img/zico-montibeller.jpeg"
          name="Zico Montibeller"
          tags={["Front-End Engineer", "Angular", "ReactJS", "Node.js"]}
          githubUrl="https://github.com/zicomontibeller"
          linkedinUrl="https://www.linkedin.com/in/zicomontibeller/"
          cvUrl="https://drive.google.com/file/d/1fUayKZHsHR1UTMGdNpNuQdf0U2grRYaa/view?usp=drive_link"
          biography={bio}
          interests={interests}
          education={educationList}
        />

        <SectionSkills
          skills={skills}
        />

        <SectionExperience
          experiences={experiences}
        />

        <SectionProject
          projects={projects}
        />

        <section id="contact" className="zm-contact">
          <div>
            <h1>Contact</h1>
            <p>If you want to get in touch, send an email or use one of the resources indicated in this page.</p>
          </div>
          <div>
            <ul className="fa-ul">
              <li>
                <i className="fa-li fas fa-envelope fa-2x" aria-hidden="true"></i>
                <span id="person-email">
                  <a href="mailto:zico.montibeller@gmail.com">zico.montibeller@gmail.com</a>
                </span>
              </li>
              <li>
                <i className="fa-li fas fa-phone fa-2x" aria-hidden="true"></i>
                <span id="person-telephone">
                  <a href="tel:47996142144">47 996 142 144</a>
                </span>
              </li>
              <li>
                <i className="fa-li fas fa-map-marker fa-2x" aria-hidden="true"></i>
                <span id="person-address">Jaraguá do Sul, SC</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2023 Zico Montibeller. This work is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0" rel="noopener noreferrer" target="_blank">CC BY NC ND 4.0</a>. Feel free to copy or adapt according to your interest </p>
        <p>
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0" rel="noopener noreferrer" target="_blank" aria-label="Creative Commons">
            <i className="fab fa-creative-commons fa-2x" aria-hidden="true"></i>
            <i className="fab fa-creative-commons-by fa-2x" aria-hidden="true"></i>
            <i className="fab fa-creative-commons-nc fa-2x" aria-hidden="true"></i>
            <i className="fab fa-creative-commons-nd fa-2x" aria-hidden="true"></i>
          </a>
        </p>
      </footer>
    </>
  );
}
