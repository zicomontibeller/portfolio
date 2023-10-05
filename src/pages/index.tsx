import Head from "next/head";
import { Header } from "~/components/Header";
import { IEducation, SectionAbout } from "~/components/SectionAbout";
import { IExperience, SectionExperience } from "~/components/SectionExperience";
import { ISkill, SectionSkills } from "~/components/SectionSkills";

// import { api } from "~/utils/api";

export default function Home() {
  const bio = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nam dicta cupiditate fuga ducimus voluptate architecto praesentium aliquam iste, earum enim reiciendis quae rerum numquam sequi repellat! Ipsum, soluta eveniet!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus repellendus veniam, dolores voluptate dicta possimus commodi cupiditate. Repellendus, sapiente hic perspiciatis consequuntur consequatur sed quos voluptatum, ea voluptates ab voluptatibus.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt ipsum repudiandae delectus tempore? Et, assumenda. Deleniti porro, dolores vel, hic magnam doloribus id reiciendis ducimus a iusto magni minima."
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
        link: 'www.wolven.com.br'
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
        link: 'conpedi.org.br'
      },
      description: 'Design and develop the web app “publicaDireito” for the company to receive, evaluate, edit and publish academic articles.',
      location: 'Florianópolis - SC',
      period: 'September 2010 - September 2012'
    },
    {
      name: 'Web Developer',
      company: {
        name: 'LAED',
        subtitle: 'Laboratório de Ensino a Distância – UFSC (Distance Learning Laboratory at UFSC)'
      },
      description: 'Engaged in multiple enhancements for a custom implementation of Moodle, an open source learning platform.',
      location: 'Florianópolis - SC',
      period: 'March 2008 - August 2010'
    }
  ]

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
          avatarUrl="/zico-montibeller.jpeg"
          name="Zico Montibeller"
          tags={["Front-End Engineer", "Angular", "ReactJS", "Node.js"]}
          githubLink="https://github.com/zicomontibeller"
          linkedinLink="https://www.linkedin.com/in/zicomontibeller/"
          cvLink="https://drive.google.com/file/d/1fUayKZHsHR1UTMGdNpNuQdf0U2grRYaa/view?usp=drive_link"
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

        <section id="projects" className="zm-projects">
          <h1>Projects</h1>
          <div>
            <div>
              <a href="#">
                <img src="https://placehold.co/264x540" height="264" width="540" alt="Lorem Ipsum" loading="lazy"/>
              </a>
              <div>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis totam? Asperiores incidunt soluta sunt est dolorum! Ducimus eos, sint ipsa illum aut nam suscipit odio, molestias voluptate assumenda nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla sapiente nihil numquam nobis blanditiis quis veritatis, neque delectus culpa maiores. Minima amet possimus eos quos nam! Quidem, velit libero.</p>
              </div>
            </div>
          </div>
        </section>

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
