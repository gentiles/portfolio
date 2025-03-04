import SkillsCard from "./SkillsCard";
import SectionTitle from "./SectionTitle";
import { skills } from "../data";
const Skills = () => {
  return (
    <section className="align-element py-20" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((item) => {
          return <SkillsCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
