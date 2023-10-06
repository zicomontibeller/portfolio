import Link from "next/link";

export interface IProject {
  name: string;
  companyName: string;
  companyUrl: string;
  url?: string;
  imgUrl: string;
  description: string[];
  techs: string[];
}

interface ISectionProjectProps extends React.HTMLAttributes<HTMLElement> {
  projects: IProject[];
}

export function SectionProject(props: ISectionProjectProps) {
  const { projects, ...restProps } = props;

  return (
    <section id="projects" {...restProps}>
      <div className="container mx-auto">
        <h1 className="text-center">Latest Projects</h1>
        <div className="">
          { projects.map(project => (
            <div className="flex flex-col lg:flex-row lg:items-stretch zm-card p-0 mb-8">
              <Link
                href={ project.url ?? project.companyUrl }
                target="_blank"
                className="h-52 w-full md:h-60 lg:h-auto lg:w-2/5 flex items-stretch"
              >
                <img 
                  src={ project.imgUrl }
                  alt={ project.name }
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="flex flex-col p-6 lg:w-3/5 border-t lg:border-l lg:border-t-0 text-lg">
                <h2 className="text-3xl font-bold">
                  <Link
                    href={ project.url ?? project.companyUrl }
                    target="_blank"
                    className=""
                  >
                    { project.name }
                  </Link>
                </h2>
                <Link
                    href={ project.companyUrl }
                    target="_blank"
                    className="text-2xl"
                >
                  { project.companyName }
                </Link>
                
                <div className="py-5">
                  {
                    project.description.map((descP) => {
                      return <div className="mb-2"><p dangerouslySetInnerHTML={{ __html: descP }} ></p></div>
                    })
                  }
                </div>
                <p className="text-cyan-600 font-bold">
                  { project.techs.map((tech, i) => i===0 ? tech : ` - ${tech}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}