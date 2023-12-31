import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileLines, FaBook, FaGraduationCap, FaInstagram, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { trackGoogleClick } from "~/utils/GoogleAnalytics";

export interface IEducation {
  title: string;
  subtitle?: string;
  subtitleUrl?: string;
  year: number;
  institution: string;
  location: string;
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

const trackSocialClick = (socialTarget:string) => {
  trackGoogleClick(`social_${socialTarget}`);
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
              <Link onClick={() => trackSocialClick('email')} href={`mailto:${aboutSection.email}`} title="Contact" aria-label="envelope">
                <FaEnvelope className={ iconClass }/>
              </Link>
            </li>
            <li>
              <Link onClick={() => trackSocialClick('github')} href={aboutSection.githubUrl} target="_blank" rel="noopener" aria-label="github" title="Github">
                <FaGithub className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link onClick={() => trackSocialClick('linkedin')} href={aboutSection.linkedinUrl} target="_blank" rel="noopener" aria-label="linkedin" title="LinkedIn">
                <FaLinkedin className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link onClick={() => trackSocialClick('instagram')} href={aboutSection.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
                <FaInstagram className={ iconClass } />
              </Link>
            </li>
            <li>
              <Link onClick={() => trackSocialClick('cv')} href={aboutSection.cvUrl} target="_blank" rel="noopener" aria-label="cv" title="Resume File">
                <FaFileLines className={ iconClass } />
              </Link>
            </li>
          </ul>
        </div>

        <div id="biography" className="w-full lg:w-2/3 p-4">
          <h1 className="mb-6">Biography</h1>

          <div className="flex flex-col gap-6 mb-10">
            { aboutSection.biography.map((p, i) => <p key={`bio-${i}`}>{p}</p>) }
          </div>

          <hr className="border-cyan-800 border-2 mb-6 md:w-2/3"/>

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
                      <p className="text-2xl">{edu.title}, {edu.year}</p>
                      <div className="text-gray-500">
                        <p className="text-xl">{edu.institution}</p>
                        <p className="flex align-middle"><FaLocationDot className="mr-2 h-6 text-sm"/><span>{edu.location}</span></p>
                      </div>
                      { 
                        !!edu.subtitle && <div>
                          
                          { !!edu.subtitleUrl
                            ? (
                              <Link href={edu.subtitleUrl} target="_blank" className="text-sky-800 flex mt-2" onClick={() => trackGoogleClick("youtube_speech")}>
                                <FaYoutube className="mr-2 h-8"/>{edu.subtitle}<FaExternalLinkAlt className="ml-2 h-3"/>
                              </Link>)
                            : <p className="text-gray-500">{ edu.subtitle }</p>
                          }
                        </div>
                      }
                      { i+1 < aboutSection.education.length && <hr className="mt-4 mb-2 "/> }
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