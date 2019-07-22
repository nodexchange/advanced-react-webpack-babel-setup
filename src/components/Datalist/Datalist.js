import React from 'react';

const Datalist = () => {
  const dataOptions = options.split(', ');

  // Generate list of options
  const dataOptionsList = dataOptions.map((dataOption, index) => {
    return <option key={index} value={dataOption} />;
  });

  return (
    <fieldset>
      <Label hasLabel={hasLabel} htmlFor={htmlFor} label={label} />

      <input list={htmlFor} />

      <datalist
        defaultValue=""
        id={htmlFor}
        name={name || null}
        required={required || null}
      >
        <option value="" disabled>
          Select one option
        </option>

        {dataOptionsList}
      </datalist>
    </fieldset>
  );
};
export default Datalist;
