/* eslint-disable react/prop-types */
import React from 'react';
import Label from '../Label/Label';

const Select = ({ options, hasLabel, label, htmlFor, name, required }) => {
  // Get all options from option prop
  const selectOptions = options.split(', ');

  // Generate list of options
  const selectOptionsList = selectOptions.map((selectOption, index) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <option key={index} value={index}>
        {selectOption}
      </option>
    );
  });

  return (
    <fieldset>
      <Label hasLabel={hasLabel} htmlFor={htmlFor} label={label} />

      <select defaultValue="" id={htmlFor} name={name || null} required={required || null}>
        <option value="" disabled>
          Select one option
        </option>

        {selectOptionsList}
      </select>
    </fieldset>
  );
};

export default Select;
