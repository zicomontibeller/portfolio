import { FaLocationDot } from "react-icons/fa6";

export interface ICompany {
  name: string;
  subtitle: string;
  link?: string;
}

export interface IExperience {
  name: string;
  company: ICompany;
  period: string;
  location: string;
  description?: string;
}

interface ISectionExperienceProps extends React.HTMLAttributes<HTMLElement> {
  experiences: IExperience[];
}

export function SectionExperience(props: ISectionExperienceProps) {
  const { experiences, ...restProps } = props;

  return (
    <section id="experience" className="zm-experience">
      <div className="container mx-auto flex flex-wrap justify-center py-10 md:justify-between">
        <h1 className="w-full text-center lg:text-left mb-10 lg:w-1/3">Experience</h1>
        <div className="w-full flex flex-col lg:w-2/3">
          { experiences.map(experience => (
            <div className="zmCard">
              <h2 className="text-2xl sm:text-3xl">{ experience.name }</h2>
              <a
                href={ experience.company.link }
                target="_blank"
                className="text-gray-500 sm:text-xl"
              >
                <span className="font-bold">{ experience.company.name }</span> - { experience.company.subtitle }
              </a>
              <p className="text-gray-400 text-md sm:text-lg flex flex-col">
                <span>{ experience.period }</span>
                <span className="flex my-1 items-center">
                  <FaLocationDot className="text-sm sm:text-md mr-1"/> { experience.location}
                </span>
              </p>
              { experience.description ? <div className="mt-6 text-lg">{ experience.description }</div> : null }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}