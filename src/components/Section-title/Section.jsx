import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
