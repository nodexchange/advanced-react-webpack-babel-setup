/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ type, value, text }) => (
  <fieldset>
    <button type={type || 'button'} value={value || null}>
      {text}
    </button>
  </fieldset>
);

export default Button;
