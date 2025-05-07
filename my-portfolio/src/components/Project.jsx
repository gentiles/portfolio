import ProjectCards from "./ProjectCards";
import SectionTitle from "./SectionTitle";
import useFetchProject from "../FetchProject";

const Project = () => {
  const { projects, loading } = useFetchProject();
  if (loading) {
    return (
      <section className="projects">
        <h2>loading</h2>
      </section>
    );
  }

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((item) => {
          return <ProjectCards key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Project;
