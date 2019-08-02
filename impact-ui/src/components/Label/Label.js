import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, label, hasLabel }) => {
  if (hasLabel === 'true') {
    // eslint-disable-next-line jsx-a11y/label-has-for
    return <label htmlFor={htmlFor}>{label}</label>;
  }
  return <div>{}</div>;
};

Label.propTypes = {
  hasLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
