import PropTypes from "prop-types";
const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5 w-full text-skills">
      <h2 className="text-3xl font-medium tracking-wider capitalize  ">
        {text}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
