/* eslint-disable react/prop-types */
import React from 'react';
import Label from '../Label/Label';

const Input = ({ hasLabel, htmlFor, label, max, min, name, placeholder, step, type, required }) => (
  <fieldset>
    <Label hasLabel={hasLabel} htmlFor={htmlFor} label={label} />

    <input
      id={htmlFor}
      max={max || null}
      min={min || null}
      name={name || null}
      placeholder={placeholder || null}
      required={required || null}
      step={step || null}
      type={type || 'text'}
    />
  </fieldset>
);
export default Input;
