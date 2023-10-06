import { ReactNode } from "react";
import { FaAngular,
  FaNodeJs,
  FaVuejs,
  FaReact,
  FaMusic,
  FaGlasses,
} from "react-icons/fa6";
import { GiViolin } from "react-icons/gi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { IoLogoCss3, IoLogoElectron } from "react-icons/io5"
import { TbBrandNextjs } from "react-icons/tb"
import { GrMysql } from "react-icons/gr"
import { SiRubyonrails } from "react-icons/si"

export interface ISkill {
  name: string;
  description: string;
  rating: number;
}
interface ISectionSkillsProps extends React.HTMLAttributes<HTMLElement> {
  skills: ISkill[];
}

export function SectionSkills(props: ISectionSkillsProps) {
  const { skills, ...restProps } = props;

  const icons:ReactNode[] = skills.map(skill => {
    switch(skill.name) {
      case 'angular':
        return <FaAngular />
      case 'react':
        return <FaReact />
      case 'node':
        return <FaNodeJs />
      case 'vue':
        return <FaVuejs />
      case 'rails':
        return <SiRubyonrails/>
      case 'nextjs':
        return <TbBrandNextjs />
      case 'tailwind':
        return <BiLogoTailwindCss />
      case 'css':
        return <IoLogoCss3 />
      case 'electron':
        return <IoLogoElectron />
      case 'mysql':
        return <GrMysql />
      case 'bass':
        return <GiViolin style={{transform: 'rotate(-45deg)'}}/>
      case 'composition':
          return <FaMusic className="w-12"/>
      default:
        return <FaGlasses />
    }
  })

  return (
    <section id="skills" {...restProps} >
      <h1 className="text-center">Skills</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          { skills.map((skill, i) => (
            <div className="flex flex-col items-center text-lg sm:text-3xl border-1 p-2 sm:p-4 md:p-6 justify-center border-sky-200 shadow-md" key={`skill-${i}`}>
              <div className="text-sky-500 text-5xl md:text-6xl">{ icons[i] }</div>
              <div className="md:mt-2 md:mb-1 text-center">{ skill.description }</div>
              <p className="text-md sm:text-lg text-gray-500">{ skill.rating }%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}