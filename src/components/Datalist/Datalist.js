/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../index';

const Datalist = ({ options, hasLabel, label, htmlFor, name, required }) => {
  const dataOptions = options.split(', ');

  // Generate list of options
  const dataOptionsList = dataOptions.map((dataOption, index) => {
    // eslint-disable-next-line react/no-array-index-key
    return <option key={index} value={dataOption} />;
  });

  return (
    <fieldset>
      <Label hasLabel={hasLabel} htmlFor={htmlFor} label={label} />

      <input list={htmlFor} />

      <datalist defaultValue="" id={htmlFor} name={name || null} required={required || null}>
        <option value="" disabled>
          Select one option
        </option>

        {dataOptionsList}
      </datalist>
    </fieldset>
  );
};

Datalist.propTypes = {
  options: PropTypes.array.isRequired,
  hasLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default Datalist;
