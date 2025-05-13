import PropTypes from 'prop-types';

const Section = ({ title }) => {
  return (
    <div className="name">
      <section className="section">
        <h2 className="title">{title}</h2>
      </section>
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
