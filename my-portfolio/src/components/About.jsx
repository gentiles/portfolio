import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />

        <p className="text-slate-600 mt-8 leading-loose">
          <SectionTitle text="Code and Coffee"></SectionTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam
          mollitia nulla minima ipsum debitis porro dicta, ex incidunt molestias
          delectus optio rem praesentium quibusdam. Ipsa labore blanditiis iure
          perferendis?
        </p>
      </div>
    </section>
  );
};

export default About;
