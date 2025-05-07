import PropTypes from "prop-types";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCards = (props) => {
  const { title, text, image, url, github } = props;
  console.log(github);

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <a href={url} target="_blank">
        <img
          src={image}
          alt={title}
          className="w-full object-cover rounded-t-xl h-64"
        />
      </a>
      <div className="p-8 capitalize">
        <h3 className="text-xl tracking-wide font-medium">{title}</h3>
        <p className=" mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank">
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          {/* <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" /> */}
        </div>
      </div>
    </article>
  );
};

ProjectCards.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

// SectionTitle.propTypes = {
//   text: PropTypes.string.isRequired,
// };
export default ProjectCards;
