import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileLines, FaBook, FaGraduationCap, FaInstagram } from "react-icons/fa6";

export interface IEducation {
  title: string;
  year: number;
  institution: string;
}

export interface IAbout {
  avatarUrl: string;
  name: string;
  email: string;
  tags: string[];
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  cvUrl: string;
  biography: string[];
  interests: string[];
  education: IEducation[];
}

interface ISectionAboutProps extends React.HTMLAttributes<HTMLElement> {
  aboutSection: IAbout;
}

export function SectionAbout(props: ISectionAboutProps) {
  const { aboutSection, ...restProps } = props;

  const iconClass = "h-8 w-8 md:h-10 md:w-10 ";

  return (
    <section id="home" {...restProps} >
      <div className="container mx-auto flex flex-wrap text-lg ">
        <div id="profile" className="flex flex-col items-center w-full lg:w-1/3 p-4">
          <div id="avatar" className="flex h-64 w-64">
            <img className="h-full w-full rounded-full" src={aboutSection.avatarUrl} alt={aboutSection.name} />
          </div>

          <h2 className="text-3xl md:text-4xl text-center mt-2">{aboutSection.name}</h2>

          <h3 className="text-2xl font-thin text-gray-400 text-center">
            {aboutSection.tags.map((tag, i) => i===0 ? tag : ` | ${tag}`)}
          </h3>

          <ul className="flex gap-4 mt-4 text-cyan-600">
            <li>
              <Link href={`mailto:${aboutSection.email}`} title="Contact" aria-label="envelope">
                <FaEnvelope className={ iconClass }/>
              </Link>
            </li>
            <li>
              <Link href={aboutSection.githubUrl} target="_blank" rel="noopener" aria-label="github" title="Github">
                <FaGithub className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link href={aboutSection.linkedinUrl} target="_blank" rel="noopener" aria-label="linkedin" title="LinkedIn">
                <FaLinkedin className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link href={aboutSection.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
                <FaInstagram className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link href={aboutSection.cvUrl} target="_blank" rel="noopener" aria-label="cv" title="Resume File">
                <FaFileLines className={ iconClass } />
              </Link>
            </li>
          </ul>
        </div>

        <div id="biography" className="w-full lg:w-2/3 p-4">
          <h1 className="mb-6">Biography</h1>

          <div className="flex flex-col gap-6 mb-6">
            { aboutSection.biography.map((p, i) => <p key={`bio-${i}`}>{p}</p>) }
          </div>

          <div className="flex flex-wrap">
            { aboutSection.interests?.length ? (
                <div className="w-full md:w-1/2">
                <h3 className="font-bold text-2xl mb-4">Interests</h3>
                <ul>
                  { aboutSection.interests.map((item, i) => (
                    <li className="flex mb-2" key={`int-${i}`}>
                      <FaBook className="mt-1 mr-2 w-5 h-5"/> {item}
                    </li>
                  )) }
                </ul>
              </div>
            ) : null }

            <div className="w-full mt-4 md:mt-0">
              <h3 className="font-bold text-2xl mb-4">Education</h3>
              <ul>
                { aboutSection.education.map((edu, i) => (
                  <li className="flex mb-2" key={`edu-${i}`}>
                    <FaGraduationCap className="mt-1 mr-2 w-8 h-6"/>
                    <div>
                      <p>{edu.title}, {edu.year}</p>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}