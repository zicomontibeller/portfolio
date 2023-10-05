import { FaEnvelope, FaGithub, FaLinkedin, FaFileLines, FaBook, FaGraduationCap } from "react-icons/fa6";

export interface IEducation {
  title: string;
  year: number;
  institution: string;
}

export interface IAbout {
  avatarUrl: string;
  name: string;
  tags: string[];
  githubLink: string;
  linkedinLink: string;
  cvLink: string;
  biography: string[];
  interests: string[];
  education: IEducation[];
}

interface ISectionAboutProps extends React.HTMLAttributes<HTMLElement>, IAbout {}

export function SectionAbout(props: ISectionAboutProps) {
  const { avatarUrl, name, tags, githubLink, linkedinLink, cvLink, biography, interests, education, ...restProps } = props;

  const iconClass = "h-8 w-8 md:h-10 md:w-10 ";

  return (
    <section id="about" {...restProps} >
      <div className="container mx-auto flex flex-wrap text-lg ">
        <div id="profile" className="flex flex-col items-center w-full lg:w-1/3 p-4">
          <div id="avatar" className="flex h-64 w-64">
            <img className="h-full w-full rounded-full" src={avatarUrl} alt={name} />
          </div>

          <h2 className="text-3xl md:text-4xl text-center my-2">{name}</h2>

          <h3 className="md:text-2xl font-thin text-gray-400 text-center">
            {tags.map((tag, i) => i===0 ? tag : ` | ${tag}`)}
          </h3>

          <ul className="flex gap-4 mt-4 text-cyan-600">
            <li>
              <a href="/#contact" title="Contact" aria-label="envelope">
                <FaEnvelope className={ iconClass }/>
              </a>
            </li>
            <li>
              <a href={githubLink} target="_blank" rel="noopener" aria-label="github" title="Github">
                <FaGithub className={ iconClass } />
              </a>
            </li>
            <li>
              <a href={linkedinLink} target="_blank" rel="noopener" aria-label="linkedin" title="LinkedIn">
                <FaLinkedin className={ iconClass } />
              </a>
            </li>
            <li>
              <a href={cvLink} target="_blank" rel="noopener" aria-label="cv" title="Resume File">
                <FaFileLines className={ iconClass } />
              </a>
            </li>
          </ul>
        </div>

        <div id="biography" className="w-full lg:w-2/3 p-4">
          <h1>Biography</h1>

          <div className="flex flex-col gap-6 mb-6">
            { biography.map(p => <p>{p}</p>) }
          </div>

          <div className="flex flex-wrap">
            { interests?.length ? (
                <div className="w-full md:w-1/2">
                <h3 className="font-bold text-2xl mb-4">Interests</h3>
                <ul>
                  { interests.map(item => (
                    <li className="flex mb-2">
                      <FaBook className="mt-1 mr-2 w-5 h-5"/> {item}
                    </li>
                  )) }
                </ul>
              </div>
            ) : null }

            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <h3 className="font-bold text-2xl mb-4">Education</h3>
              <ul>
                { education.map(edu => (
                  <li className="flex">
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