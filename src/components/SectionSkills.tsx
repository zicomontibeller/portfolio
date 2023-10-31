import { ReactElement, useEffect, useState } from "react";
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
import { ITEMS_PER_PAGE, Pagination } from "./Pagination";
import { userData } from "~/userData";

export interface ISkill {
  name: string;
  description: string;
  rating: number;
}

export function SectionSkills(props: React.HTMLAttributes<HTMLElement>) {
  const { ...restProps } = props;
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    onPageChange(1);
  }, [])
  
  // const calculatePaginatedSkills = (page:number):ISkill[] => skills.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const onPageChange = (page:number) => {
    fetch(`/api/me/${page}`).then(res => res.json()).then(user => {
      setSkills(user.skills);
    })
  }

  const icons: Record<string, ReactElement>  = {
    "angular": <FaAngular />,
    "react": <FaReact />,
    "node": <FaNodeJs />,
    "vue": <FaVuejs />,
    "rails": <SiRubyonrails/>,
    "nextjs": <TbBrandNextjs />,
    "tailwind": <BiLogoTailwindCss />,
    "css": <IoLogoCss3 />,
    "electron": <IoLogoElectron />,
    "mysql": <GrMysql />,
    "bass": <GiViolin style={{transform: 'rotate(-45deg)'}}/>,
    "composition": <FaMusic className="w-12"/>
  }

  return (
    <section id="skills" {...restProps} >
      <h1 className="text-center">Skills</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          { skills.map(skill => (
            <div className="flex flex-col items-center text-lg sm:text-3xl border p-2 sm:p-4 md:p-6 justify-center shadow-md
            dark:shadow-cyan-900 dark:border-slate-500" key={`skill-${skill.name}`}>
              <div className="text-sky-500 text-5xl md:text-6xl">{ icons[skill.name] || <FaGlasses /> }</div>
              <div className="md:mt-2 md:mb-1 text-center">{ skill.description }</div>
              <p className={`text-md sm:text-lg text-gray-500 ${skill.name === 'css' ? "w-full text-right" : ""}`}>{ skill.rating }%</p>
            </div>
          ))}
        </div>
      </div>
      <Pagination items={skills} onPageChange={onPageChange} numberPages={Math.ceil(userData.skills.length / ITEMS_PER_PAGE)}/>
    </section>
  );
}