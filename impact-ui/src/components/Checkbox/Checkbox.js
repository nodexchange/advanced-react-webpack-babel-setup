/* eslint-disable react/prop-types */
import React from 'react';

const Checkbox = ({ htmlFor, label, name, required }) => (
  <fieldset>
    <label htmlFor={htmlFor} label={label}>
      <input id={htmlFor} name={name || null} required={required || null} type="checkbox" />
      {label}
    </label>
  </fieldset>
);

export default Checkbox;
