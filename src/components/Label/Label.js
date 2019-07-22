import React from 'react';

const Label = ({htmlFor, label}) => {
  if (hasLabel === 'true') {
    return <label htmlFor={htmlFor}>{label}</label>;
  }
  return <div>{}</div>;
}

export default Label;
