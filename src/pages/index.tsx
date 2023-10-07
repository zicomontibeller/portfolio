import { SectionAbout } from "~/components/SectionAbout";
import { SectionExperience } from "~/components/SectionExperience";
import { SectionProject } from "~/components/SectionProjects";
import { SectionSkills } from "~/components/SectionSkills";
import { userData } from "~/userData";

export default function Home() {
  return (
    <>
      <SectionAbout
        aboutSection={userData.about}
      />

      <SectionSkills
        skills={userData.skills}
      />

      <SectionExperience
        experiences={userData.experiences}
      />

      <SectionProject
        projects={userData.projects}
      />
    </>
  );
}
