import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileLines, FaBook, FaGraduationCap, FaInstagram } from "react-icons/fa6";

export interface IEducation {
  title: string;
  year: number;
  institution: string;
}

export interface IUser {
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
  user: IUser;
}

export function SectionAbout(props: ISectionAboutProps) {
  const { user, ...restProps } = props;

  const iconClass = "h-8 w-8 md:h-10 md:w-10 ";

  return (
    <section id="home" {...restProps} >
      <div className="container mx-auto flex flex-wrap text-lg ">
        <div id="profile" className="flex flex-col items-center w-full lg:w-1/3 p-4">
          <div id="avatar" className="flex h-64 w-64">
            <img className="h-full w-full rounded-full" src={user.avatarUrl} alt={user.name} />
          </div>

          <h2 className="text-3xl md:text-4xl text-center mt-2">{user.name}</h2>

          <h3 className="text-2xl font-thin text-gray-400 text-center">
            {user.tags.map((tag, i) => i===0 ? tag : ` | ${tag}`)}
          </h3>

          <ul className="flex gap-4 mt-4 text-cyan-600">
            <li>
              <Link href={`mailto:${user.email}`} title="Contact" aria-label="envelope">
                <FaEnvelope className={ iconClass }/>
              </Link>
            </li>
            <li>
              <Link href={user.githubUrl} target="_blank" rel="noopener" aria-label="github" title="Github">
                <FaGithub className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link href={user.linkedinUrl} target="_blank" rel="noopener" aria-label="linkedin" title="LinkedIn">
                <FaLinkedin className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link href={user.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
                <FaInstagram className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link href={user.cvUrl} target="_blank" rel="noopener" aria-label="cv" title="Resume File">
                <FaFileLines className={ iconClass } />
              </Link>
            </li>
          </ul>
        </div>

        <div id="biography" className="w-full lg:w-2/3 p-4">
          <h1 className="mb-6">Biography</h1>

          <div className="flex flex-col gap-6 mb-6">
            { user.biography.map(p => <p>{p}</p>) }
          </div>

          <div className="flex flex-wrap">
            { user.interests?.length ? (
                <div className="w-full md:w-1/2">
                <h3 className="font-bold text-2xl mb-4">Interests</h3>
                <ul>
                  { user.interests.map(item => (
                    <li className="flex mb-2">
                      <FaBook className="mt-1 mr-2 w-5 h-5"/> {item}
                    </li>
                  )) }
                </ul>
              </div>
            ) : null }

            <div className="w-full mt-4 md:mt-0">
              <h3 className="font-bold text-2xl mb-4">Education</h3>
              <ul>
                { user.education.map(edu => (
                  <li className="flex mb-2">
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